
import './BidCard.css';
import { useContext } from 'react';
import { BidContext } from '../../contexts/BidContext';
import { ErrorContext } from '../../contexts/ErrorContext';

const BidCard = ({bid}) => {

    const {deleteBid} = useContext(BidContext);
    const {error} = useContext(ErrorContext);

    return(<div className="bid-card">
        {error && <p>{error}</p>}
        <h2>${bid.bidPrice} {bid?.auction?.auctionTitle} {bid?.user?.userName && "av"} {bid?.user?.userName} </h2>
        <button className="bid-button" onMouseDown={() => deleteBid(bid.bidID)}>🗑️</button>
    </div>)
}

export default BidCard;