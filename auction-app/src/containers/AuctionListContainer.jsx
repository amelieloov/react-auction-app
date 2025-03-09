
import { useState, useEffect } from "react";
import { GetAuctionsByUserID } from "../services/AuctionService";
import AuctionList from "../components/AuctionList/AuctionList";

const AuctionListContainer = () => {

    const [auctionList, setAuctionList] = useState([]);

    useEffect(() => {
        const getAuctions = async () => {
            const auctions = await GetAuctionsByUserID();
            setAuctionList(auctions);
        }

        getAuctions();
    }, []);

    useEffect(() => {
        console.log("auctionsbyuserid", auctionList);
    }, [auctionList]);

    const handleSearch = () => {
        console.log("you pressed the auction");
    }

    return(
        <AuctionList auctionList={auctionList} handleSearch={handleSearch} viewType="dashboard"/>
    )
}

export default AuctionListContainer;