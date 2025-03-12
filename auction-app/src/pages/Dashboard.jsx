
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuctionList from "../components/AuctionList/AuctionList";
import { AuctionContext } from "../contexts/AuctionContext";
import { BidContext } from "../contexts/BidContext";
import BidList from "../components/BidList/BidList";

import './Dashboard.css';

const Dashboard = () => {

    const navigate = useNavigate();
    const { auctions, getAuctionsByUser } = useContext(AuctionContext);
    const { getBidsByUser } = useContext(BidContext);

    useEffect(() => {
        const getAuctionsAndBids = async () => {
            getAuctionsByUser();
            getBidsByUser();
        }

        getAuctionsAndBids();
    }, [])

    return (
        <div className="dashboard">
            <div>
                <h1>My auctions</h1>
                <AuctionList auctionList={auctions} handleSearch={null} viewType="dashboard" />
                <button className="button-style" onClick={() => navigate("/auction/add")}>Create New Auction</button>
            </div>
            <div>
                <h1>My bids</h1>
                <BidList />
            </div>
        </div>
    )
}

export default Dashboard;