
import BidCard from "../BidCard/BidCard";
import { useContext } from "react";
import { BidContext } from "../../contexts/BidContext";

const BidList = () => {

    const {bids, deleteBidError} = useContext(BidContext);

    const bidList = bids.map(bid => {
        return(<BidCard key={bid.bidID} bid={bid}/>)
    });

    return(
        <div>
            {deleteBidError && (<p>{deleteBidError}</p>)}
            {bids.length !== 0 ? <ul>{bidList}</ul> : <h2>No bids.</h2>}
        </div>
    )
}

export default BidList;