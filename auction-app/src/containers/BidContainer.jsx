
import BidList from "../components/BidList/BidList";
import { useState, useEffect } from "react";
import { GetBidsByUserID } from '../services/BidService/'
import { DeleteBid } from "../services/BidService";

const BidContainer = () => {
    const [bids, setBids] = useState([]);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const getBids = async () => {
            const bidList = await GetBidsByUserID();
            console.log("bidList", bidList)
            setBids(bidList);
        }

        getBids();
    }, [])

    const onMouseOver = () => {
        setShowButton(true);
    }

    const onMouseLeave = () => {
        setShowButton(false);
    }

    const deleteBid = (bidId) => {
        DeleteBid(bidId);
        setBids((prevBids) => prevBids.filter(bid => bid.id !== bidId));
    }

    return(
        <BidList bidList={bids} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} showButton={showButton}/>
    )
}

export default BidContainer;