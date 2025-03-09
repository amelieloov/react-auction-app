
import AuctionListContainer from "../containers/AuctionListContainer";
import BidContainer from "../containers/BidContainer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    return(
        <div>
            <button onClick={() => navigate("/add/auction")}>Create Auction</button>
            <h1>My auctions</h1>
            <AuctionListContainer/>

            <h1>My bids</h1>
            <BidContainer/>
        </div>
    )
}

export default Dashboard;