
import { useState, useContext, createContext } from "react";
import { CreateAuction, DeleteAuction, SearchAuctions } from "../services/AuctionService";
import { useNavigate } from "react-router-dom";
import { ErrorContext } from "./ErrorContext";

export const AuctionContext = createContext();

const AuctionProvider = (props) => {

    const navigate = useNavigate();
    const [auctions, setAuctions] = useState([]);
    const [auction, setAuction] = useState({auctionID: "", auctionTitle: "", auctionDescription: "", auctionPrice: "", 
        endTime: "", image: null })
    const {showError} = useContext(ErrorContext);
    const [searchError, setSearchError] = useState(null);
    // const showSearchError = (message, duration = 4000) => {
    //     setSearchError(message);
    
    //     setTimeout(() => {
    //       setSearchError("");
    //     }, duration);
    //   };

    const handleSearch = async (condition) => {

        try{
            const data = await SearchAuctions(condition);
            setAuctions(data);
            data.length === 0 ? setSearchError(true) : setSearchError(false)
            navigate(`/searchresults`)
        } catch (error){
            setSearchError(error.message);
        }
    }

    const addAuction = async (auction) => {
        try{
            CreateAuction(bid);
            setAuctions((prev) => [...prev, auction]);
            navigate("/dashboard");
        } catch (error){
            console.error("Updating auction failed:", error);
            showError(error.message);
            console.log(fetchError);
        }
    };

    const deleteAuction = async (id) => {
        try{
            DeleteAuction(id);
            setAuctions((prev) => prev.filter(auction => auction.auctionID !== id));
        }
        catch (error) {
            console.error("Updating auction failed:", error);
            showError(error.message);
            console.log(fetchError);
        }
    }
    return (<AuctionContext.Provider value={{ auction, setAuction, auctions, setAuctions, 
    handleSearch, addAuction, deleteAuction, searchError, setSearchError }}>
        {props.children}
    </AuctionContext.Provider>)
}

export default AuctionProvider;