
import { useState, createContext } from "react";
import { CreateAuction, DeleteAuction, SearchAuctions } from "../services/AuctionService";
import { useNavigate } from "react-router-dom";

export const AuctionContext = createContext();

const AuctionProvider = (props) => {

    const navigate = useNavigate();
    const [auctions, setAuctions] = useState([]);
    const [auction, setAuction] = useState({auctionID: "", auctionTitle: "", auctionDescription: "", auctionPrice: "", 
        endTime: "", image: null })
    const [fetchError, setFetchError] = useState(null);

    const handleSearch = async (condition) => {

        try{
            const data = await SearchAuctions(condition);
            setAuctions(data);
            data.length === 0 ? setFetchError(true) : setFetchError(false)
            navigate(`/searchresults`)
        } catch (error){
            setFetchError(error.message);
        }

        //auctions ? setFetchError(false) : setFetchError(true);
    }

    const addAuction = (auction) => {
        CreateAuction(bid);
        setAuctions((prev) => [...prev, auction]);
    };

    const deleteAuction = (id) => {
        DeleteAuction(id);
        setAuctions((prev) => prev.filter(auction => auction.auctionID !== id));
    }
    return (<AuctionContext.Provider value={{ auction, setAuction, auctions, setAuctions, fetchError, setFetchError, 
    handleSearch, addAuction, deleteAuction }}>
        {props.children}
    </AuctionContext.Provider>)
}

export default AuctionProvider;