
import AuctionCard from "../components/AuctionCard/AuctionCard"
import { GetAuctionById } from "../services/AuctionService";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const DetailedAuctionContainer = () => {

    const [pickedAuction, setPickedAuction] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const getAuctions = async () => {
            const auction = await GetAuctionById(id);
            setPickedAuction(auction);
        }

        getAuctions();
    }, []);

    useEffect(() => {
        console.log("auctionsbyid", pickedAuction);
    }, [pickedAuction]);

    return(
        <AuctionCard auction={pickedAuction} viewType="detailed"/>
    )
}

export default DetailedAuctionContainer;