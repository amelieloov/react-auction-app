
import { useParams } from "react-router-dom";
import AuctionCard from "../components/AuctionCard/AuctionCard"
import { GetAuctionById } from "../services/AuctionService";
import { useEffect, useContext } from "react";
import { AuctionContext } from "../contexts/AuctionContext";
import { BidContext } from "../contexts/BidContext";
import './DetailedAuctionInfo.css';
import BidList from "../components/BidList/BidList";
import { GetBidsByUserID } from "../services/BidService";

const DetailedAuctionInfo = () => {

    const { id } = useParams();
    const { auction, setAuction, checkIfClosed } = useContext(AuctionContext);
    const { setBids } = useContext(BidContext);

    useEffect(() => {
        const getAuctions = async () => {
            const auction = await GetAuctionById(id);
            setAuction(auction);
            setBids(auction.bids);
        }

        getAuctions();
    }, [id]);

    return (
        <div className="container">
            <div className="auction">
                <AuctionCard auction={auction} viewType="detailed" />
            </div>
            <div className="bidlist">
                {!checkIfClosed(auction.endTime) && <h1 className="bid-title">Bids</h1>}
                <BidList />
            </div>
        </div>
    )
}

export default DetailedAuctionInfo;