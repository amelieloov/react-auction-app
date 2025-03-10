
import BidCard from "../BidCard/BidCard";
import { useContext } from "react";
import { BidContext } from "../../contexts/BidContext";

const BidList = () => {

    const {bids} = useContext(BidContext);

    const bidList = bids.map(bid => {
        return(<BidCard key={bid.bidID} bid={bid}/>)
    });

    return(
        <div>
            {bids.length !== 0 ? <ul>{bidList}</ul> : <h2>You don't have any bids yet.</h2>}
        </div>
    )
}

export default BidList;