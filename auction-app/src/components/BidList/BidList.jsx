
import BidCard from "../BidCard/BidCard";

const BidList = ({bidList, showButton, onMouseOver, onMouseLeave}) => {

    const bids = bidList.map(bid => {
        return(<BidCard key={bid.bidID} bid={bid} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} showButton={showButton}/>)
    });

    return(
        <ul>{bids}</ul>
    )
}

export default BidList;