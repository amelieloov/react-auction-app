
import { useState, useEffect } from "react";
import { GetAuctionsByUserID } from "../services/AuctionService";
import AuctionList from "../components/AuctionList/AuctionList";
import { useContext } from "react";
import { AuctionContext } from "../contexts/AuctionContext";

const AuctionListContainer = () => {

    const {auctions, setAuctions} = useContext(AuctionContext);
    // const [auctionList, setAuctionList] = useState([]);

    useEffect(() => {
        const getAuctions = async () => {
            const auctionList = await GetAuctionsByUserID();
            setAuctions(auctionList);
        }

        getAuctions();
    }, []);

    const handleSearch = () => {
        console.log("you pressed the auction");
    }

    return(
        <AuctionList auctionList={auctions} handleSearch={handleSearch} viewType="dashboard"/>
    )
}

export default AuctionListContainer;