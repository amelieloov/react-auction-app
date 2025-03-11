
import { useState, useContext, createContext } from "react";
import { AddBid } from "../services/BidService";
import { DeleteBid, GetBidsByUserID } from "../services/BidService";
import { GetAuctionById } from "../services/AuctionService";
import { AuctionContext } from "./AuctionContext";
import { toast } from 'react-hot-toast';

export const BidContext = createContext();

const BidProvider = (props) => {

    const [bids, setBids] = useState([]);
    const {setAuction} = useContext(AuctionContext);

    const getBidsByUser = async () => {     
        const bidList = await GetBidsByUserID();
        setBids(bidList);
    }

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

    return (<BidContext.Provider value={{ bids, setBids, addBid, deleteBid, getBidsByUser}}>
        {props.children}
    </BidContext.Provider>)
}

export default BidProvider;