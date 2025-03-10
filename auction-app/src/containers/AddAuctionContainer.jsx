
import AuctionForm from "../components/AuctionForm/AuctionForm";
import { useState } from "react";
import { CreateAuction } from "../services/AuctionService";
import { AuctionContext } from "../contexts/AuctionContext";

import { useContext } from "react";

const AddAuctionContainer = () => {

    const {auction} = useContext(AuctionContext);
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [uploadMessage, setUploadMessage] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log("auction", auction);

            const formData = new FormData();
            formData.append("auctionTitle", auction.auctionTitle);
            formData.append("auctionDescription", auction.auctionDescription);
            formData.append("auctionPrice", auction.auctionPrice);
            formData.append("endTime", auction.endTime);
            if (selectedImage) {
                formData.append("image", selectedImage);
            }

            await CreateAuction(formData);

        } catch (error) {
            console.error("Adding auction failed:", error);
        }
    }

    const handleChange = (e) => {
        setAuction({ ...auction, [e.target.name]: e.target.value });
    }

    return (
        <AuctionForm auction={auction} handleSubmit={handleSubmit} handleChange={handleChange}
            handleFileChange={handleFileChange} previewUrl={previewUrl} rubric="Create auction" buttonText="Post" />
    )
}

export default AddAuctionContainer;