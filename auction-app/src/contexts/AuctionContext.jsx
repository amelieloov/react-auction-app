
import { useState, useContext, createContext } from "react";
import { CreateAuction, UpdateAuction, DeleteAuction, SearchAuctions, GetAuctionsByUserID } from "../services/AuctionService";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { UIContext } from "./UIContext";

export const AuctionContext = createContext();

const AuctionProvider = (props) => {

    const navigate = useNavigate();
    const [auctions, setAuctions] = useState([]);
    const [auction, setAuction] = useState({
        auctionID: "", auctionTitle: "", auctionDescription: "", auctionPrice: "",
        endTime: "", image: null
    })
    const [selectedImage, setSelectedImage] = useState(null);
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
            const formData = new FormData();
            formData.append("auctionTitle", auction.auctionTitle);
            formData.append("auctionDescription", auction.auctionDescription);
            formData.append("auctionPrice", auction.auctionPrice);
            formData.append("endTime", auction.endTime);
            if (selectedImage) {
                formData.append("image", selectedImage);
            }

            await CreateAuction(formData);
            navigate("/dashboard");

        } catch (error) {
            toast.error(error.message);
        }
    }
    
    const updateAuction = async () => {
        try {
            const formData = new FormData();
            formData.append("auctionID", auction.auctionID);
            formData.append("auctionTitle", auction.auctionTitle);
            formData.append("auctionDescription", auction.auctionDescription);
            formData.append("auctionPrice", auction.auctionPrice);
            formData.append("endTime", auction.endTime);
            if (selectedImage) {
                formData.append("image", selectedImage);
            }

            await UpdateAuction(formData);
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
        deleteAuction, checkIfClosed, getAuctionsByUser, searchError, setSearchErrorTimer, previewUrl, setPreviewUrl, selectedImage,
        setSelectedImage
    }}>
        {props.children}
    </AuctionContext.Provider>)
}

export default AuctionProvider;