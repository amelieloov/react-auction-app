import './AuctionCard.css';
import {formatDate} from '../../utils/DateUtils.js';
import { useNavigate, useParams } from 'react-router-dom';

const AuctionCard = ({ auction, viewType }) => {

    const navigate = useNavigate();

    return (
        <div className="auction-card">
            <img onClick={() => navigate(`/item/${auction.auctionID}`)} src={`https://localhost:7242${auction.image}`} alt="No picture" />
            <h2>{auction.auctionTitle}</h2>
            <p>${auction.auctionPrice}</p>

            {viewType === "detailed" && <div>
            <h2>{auction.auctionDescription}</h2>
            <p>Created {formatDate(auction.startTime)} {auction?.user?.userName && "by"} {auction?.user?.userName}</p>
            <p>Ends {formatDate(auction.endTime)}</p></div>}

            {viewType === "dashboard" && <div className="auction-button"><button>✏️</button>
            <button>🗑️</button></div>}
            
        </div>
    )
}

export default AuctionCard;