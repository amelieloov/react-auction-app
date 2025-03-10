
import AuctionListContainer from "../containers/AuctionListContainer";
import BidContainer from "../containers/BidContainer";
import { useNavigate } from "react-router-dom";
import { UIContext } from "../contexts/UIContext";
import { useContext } from "react";

const Dashboard = () => {

    const navigate = useNavigate();
    const {isEditMode, setIsEditMode} = useContext(UIContext);

    return(
        <div>
            <button onClick={() => navigate("/auction/add")}>Create Auction</button>
            {/* <button onClick={isEditMode ? () => setIsEditMode(true) : setIsEditMode(false)}>Edit Mode</button> */}
            <h1>My auctions</h1>
            <AuctionListContainer/>

            <h1>My bids</h1>
            <BidContainer/>
        </div>
    )
}

export default Dashboard;