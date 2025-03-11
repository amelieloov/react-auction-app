
import { useState, useEffect, createContext } from "react";
import { AddBid } from "../services/BidService";
import { GetBidsByUserID } from "../services/BidService";
import { DeleteBid } from "../services/BidService";

export const BidContext = createContext();

const BidProvider = (props) => {

    const [bids, setBids] = useState([]);

    const addBid = (newBid) => {
        AddBid(bid);
        setBids((prevBids) => [...prevBids, newBid]);
    };

    const deleteBid = (bidId) => {
        DeleteBid(bidId);
        setBids((prevBids) => prevBids.filter(bid => bid.id !== bidId));
    }

    return(<BidContext.Provider value={{bids, setBids, addBid, deleteBid}}>
        {props.children}
    </BidContext.Provider>)
}

export default BidProvider;