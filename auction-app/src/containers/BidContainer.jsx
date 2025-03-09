
import BidList from "../components/BidList/BidList";
import { useState, useEffect } from "react";
import { GetBidsByUserID } from '../services/BidService/'

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

    useEffect(() => {
        console.log("Updated bids:", bids); // ✅ Now logs correctly when state updates
      }, [bids]);

    const onMouseOver = () => {
        setShowButton(true);
    }

    const onMouseLeave = () => {
        setShowButton(false);
    }

    return(
        <BidList bidList={bids} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} showButton={showButton}/>
    )
}

export default BidContainer;