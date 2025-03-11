
import { useParams } from "react-router-dom";
import AuctionCard from "../components/AuctionCard/AuctionCard"
import { GetAuctionById } from "../services/AuctionService";
import { useEffect, useContext } from "react";
import { AuctionContext } from "../contexts/AuctionContext";
import { BidContext } from "../contexts/BidContext";
//import './DetailedAuctionInfo.css';
import BidList from "../components/BidList/BidList";

const DetailedAuctionInfo = () => {

    const { id } = useParams();
    const { auction, setAuction } = useContext(AuctionContext);
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
        <div className="grid">
            <div className="left">
                <AuctionCard auction={auction} viewType="detailed" />
            </div>
            <div className="right">
                <BidList />
            </div>
        </div>
    )
}

export default DetailedAuctionInfo;