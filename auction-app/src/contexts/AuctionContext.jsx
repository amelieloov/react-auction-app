
import { useState, createContext } from "react";
import { CreateAuction, UpdateAuction, DeleteAuction, SearchAuctions, GetAuctionsByUserID } from "../services/AuctionService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const AuctionContext = createContext();

const AuctionProvider = (props) => {

    const navigate = useNavigate();
    const [auctions, setAuctions] = useState([]);
    const [auction, setAuction] = useState({
        auctionID: "", auctionTitle: "", auctionDescription: "", auctionPrice: "",
        endTime: "", image: null
    })
    const [previewUrl, setPreviewUrl] = useState(null);
    const [searchError, setSearchError] = useState("");

    const setSearchErrorTimer = () => {
        setSearchError(true);

        setTimeout(() => {
            setSearchError(false);
        }, 3000);
    };

    const createAuction = async () => {
        try {
            await CreateAuction(auction);
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.message);
        }
    }
    
    const updateAuction = async () => {
        try {
            await UpdateAuction(auction);
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.message);
        }
    }

    const searchAuctions = async (condition) => {
        const data = await SearchAuctions(condition);
        setAuctions(data);
        data.length === 0 && setSearchErrorTimer();
        navigate(`/searchresults`)
    }

    const getAuctionsByUser = async () => {
        const auctionList = await GetAuctionsByUserID();
        setAuctions(auctionList);
    };

    const deleteAuction = async (id) => {
        try {
            await DeleteAuction(id);
            setAuctions((prev) => prev.filter(auction => auction.auctionID !== id));
        }
        catch (error) {
            toast.error(error.message);
        }
    }

    const checkIfClosed = (endTime) => {
        const now = new Date();
        const endTimeAsDate = new Date(endTime)
        const isClosed = endTimeAsDate < now;
        return isClosed;
    }

    return (<AuctionContext.Provider value={{
        auction, setAuction, auctions, setAuctions, searchAuctions, createAuction, updateAuction,
        deleteAuction, checkIfClosed, getAuctionsByUser, searchError, setSearchErrorTimer, previewUrl, setPreviewUrl
    }}>
        {props.children}
    </AuctionContext.Provider>)
}

export default AuctionProvider;