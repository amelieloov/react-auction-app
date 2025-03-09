
import AuctionForm from "../components/AuctionForm/AuctionForm";
import { useState } from "react";
import { UpdateAuction as UpdateAuctionContainer } from "../services/AuctionService";

const UpdateAuctionContainer = () => {

    const [auction, setAuction] = useState({ auctionTitle: "", auctionDescription: "", auctionPrice: "", endTime: ""});

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log("auction", auction);

            await UpdateAuctionContainer(auction);
        } catch (error) {
            console.error("Adding auction failed:", error);
        }
    }

    const handleChange = (e) => {
        setAuction({ ...auction, [e.target.name]: e.target.value });
    }

    return (
        <AuctionForm auction={auction} handleSubmit={handleSubmit} handleChange={handleChange}
            handleFileChange={handleFileChange} previewUrl={previewUrl} buttonText="Update"/>
    )
}

export default UpdateAuctionContainer;