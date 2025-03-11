
import { useState, useContext, createContext } from "react";
import { CreateAuction, DeleteAuction, SearchAuctions, GetAuctionsByUserID } from "../services/AuctionService";
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
    const [searchError, setSearchError] = useState("");

    const setSearchErrorTimer = () => {
        setSearchError(true);
    
        setTimeout(() => {
          setSearchError(false);
        }, 3000);
      };

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


    const addAuction = async (auction) => {
        try {
            await CreateAuction(bid);
            setAuctions((prev) => [...prev, auction]);
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.message);
        }
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
        auction, setAuction, auctions, setAuctions, searchAuctions, addAuction,
        deleteAuction, checkIfClosed, getAuctionsByUser, searchError, setSearchErrorTimer
    }}>
        {props.children}
    </AuctionContext.Provider>)
}

export default AuctionProvider;