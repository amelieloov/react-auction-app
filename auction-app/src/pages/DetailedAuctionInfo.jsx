
import { useParams } from "react-router-dom";
import AuctionCard from "../components/AuctionCard/AuctionCard"
import { GetAuctionById } from "../services/AuctionService";
import { useEffect, useContext } from "react";
import { AuctionContext } from "../contexts/AuctionContext";
import { BidContext } from "../contexts/BidContext";

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
        <AuctionCard auction={auction} viewType="detailed" />
    )
}

export default DetailedAuctionInfo;