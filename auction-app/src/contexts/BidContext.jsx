
import { useState, useEffect, useContext, createContext } from "react";
import { AddBid } from "../services/BidService";
import { DeleteBid } from "../services/BidService";
import { ErrorContext } from "./ErrorContext";
import { GetAuctionById } from "../services/AuctionService";
import { AuctionContext } from "./AuctionContext";
import { toast } from 'react-hot-toast';

export const BidContext = createContext();

const BidProvider = (props) => {

    const [bids, setBids] = useState([]);
    const {showError} = useContext(ErrorContext);
    const {setAuction} = useContext(AuctionContext);
    const {deleteBidError, setDeleteBidError} = useState(""); 
    const showDeleteBidError = (message, duration = 4000) => {
        setAuthError(message);
    
        setTimeout(() => {
          setAuthError("");
        }, duration);
      };

    const addBid = async (newBid) => {
        try {
            await AddBid(newBid);
            const auction = await GetAuctionById(newBid.auctionID);
            setAuction(auction);
            setBids((prevBids) => [...prevBids, newBid]);
        } catch (error) {
            console.error("Adding bid failed:", error);
            toast.error(error.message);
        }
    };

    const deleteBid = async (bidId) => {
        try {
            await DeleteBid(bidId);
            setBids((prevBids) => prevBids.filter(bid => bid.id !== bidId));
        } catch (error) {
            console.error("Deleting bid failed:", error);
            toast.error(error.message);
        }
    }

    return (<BidContext.Provider value={{ bids, setBids, addBid, deleteBid, deleteBidError, showDeleteBidError}}>
        {props.children}
    </BidContext.Provider>)
}

export default BidProvider;