
import './BidCard.css';
import { useContext } from 'react';
import { BidContext } from '../../contexts/BidContext';

const BidCard = ({bid}) => {

    const {deleteBid} = useContext(BidContext);

    return(<div className="bid-card">
        <h2>{bid?.auction?.auctionTitle}</h2>
        <h2>${bid.bidPrice} av {bid?.user?.userName}</h2>
        <button className="bid-button" onMouseDown={() => deleteBid(bid.bidID)}>🗑️</button>
    </div>)
}

export default BidCard;