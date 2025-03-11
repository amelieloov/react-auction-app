import './AuctionCard.css';
import { formatDate } from '../../utils/DateUtils.js';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { BidContext } from '../../contexts/BidContext.jsx';
import { AuctionContext } from '../../contexts/AuctionContext.jsx';
import { ErrorContext } from '../../contexts/ErrorContext.jsx';
import BidList from '../BidList/BidList.jsx';

const AuctionCard = ({ auction, viewType }) => {

    const navigate = useNavigate();
    const { addBid } = useContext(BidContext);
    const { deleteAuction } = useContext(AuctionContext);
    const { error } = useContext(ErrorContext);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddBid = () => {
        addBid({ bidPrice: inputValue, auctionID: auction.auctionID });
        setInputValue("");
    }

    const cardClass =
        viewType === 'search' ? 'card-search' :
            viewType === 'detailed' ? 'card-detailed' :
                viewType = 'dashboard' ? 'card-dashboard' :
                    'card-default';

    return (
        <div onClick={() => navigate(`/item/${auction.auctionID}`)} className={`auction-card ${cardClass}`}>
            <img src={`https://localhost:7242${auction.image}`} alt="No picture" />

            <h2>{auction.auctionTitle}</h2>
            <p>Current price: ${auction.auctionPrice}</p>

            {viewType === "detailed" && <div>
                <div >
                    <h2>Description: {auction.auctionDescription}</h2>
                    <p>Created {formatDate(auction.startTime)} {auction?.user?.userName && "by"} {auction?.user?.userName}</p>
                    <p>Ends {formatDate(auction.endTime)}</p>
                    <input type="number" value={inputValue} onChange={handleChange} />
                    <button onClick={handleAddBid}>Add bid</button>
                </div>
                <BidList />
            </div>}

            {viewType === "card-dashboard" && <div className="auction-button">
                {error && (<p>{error}</p>)}
                <button onMouseDown={() => navigate(`/auction/update/${auction.auctionID}`)}>✏️</button>
                <button onMouseDown={() => deleteAuction(auction.auctionID)}>🗑️</button>
            </div>}

        </div>
    )
}

export default AuctionCard;