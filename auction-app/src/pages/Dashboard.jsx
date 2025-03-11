
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuctionList from "../components/AuctionList/AuctionList";
import { AuctionContext } from "../contexts/AuctionContext";
import { BidContext } from "../contexts/BidContext";
import BidList from "../components/BidList/BidList";
import { GetAuctionsByUserID } from "../services/AuctionService";
import { GetBidsByUserID } from "../services/BidService";

import { AuthContext } from "../contexts/AuthContext";
import './Dashboard.css';

const Dashboard = () => {

    const navigate = useNavigate();
    const { auctions, setAuctions } = useContext(AuctionContext);
    const { setBids } = useContext(BidContext);
    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        const getAuctionsAndBids = async () => {
            const auctionList = await GetAuctionsByUserID();
            setAuctions(auctionList);

            const bidList = await GetBidsByUserID();
            console.log("bidList", bidList)
            setBids(bidList);
            console.log("isLoggedin", isLoggedIn)
        }

        getAuctionsAndBids();
    }, [])

    const handleSearch = () => {
        console.log("you pressed the auction");
    }

    return (
        <div className="dashboard">
            <div>
                <button onClick={() => navigate("/auction/add")}>Create New Auction</button>
                <h1>My auctions</h1>
                <AuctionList auctionList={auctions} handleSearch={handleSearch} viewType="dashboard" />
            </div>
            <div>
                <h1>My bids</h1>
                <BidList />
            </div>
        </div>
    )
}

export default Dashboard;