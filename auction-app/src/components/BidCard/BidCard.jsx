
import './BidCard.css';

const BidCard = ({bid, showButton, onMouseOver, onMouseLeave}) => {

    return(<div className="bid-card" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        <h2>{bid.auction.auctionTitle}</h2>
        <h2>Your bid: {bid.bidPrice}</h2>
        {showButton && <button className="bid-button">🗑️</button>}
    </div>)
}

export default BidCard;