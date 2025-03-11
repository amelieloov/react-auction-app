
import AuctionForm from "../components/AuctionForm/AuctionForm";
import { useState, useEffect, useContext } from "react";
import { UpdateAuction } from "../services/AuctionService";
import { AuctionContext } from "../contexts/AuctionContext";
import { useParams } from "react-router-dom";
import { GetAuctionById } from "../services/AuctionService";

const UpdateAuctionContainer = () => {

    const { auction, setAuction, fetchError, setFetchError } = useContext(AuctionContext);
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const getAuction = async () => {
            const auction = await GetAuctionById(id);
            setAuction(auction);
            setPreviewUrl(`https://localhost:7242${auction.image}`);
            setSelectedImage(`https://localhost:7242${auction.image}`)
        }

        getAuction();
    }, []);

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
            setFetchError("");

            const formData = new FormData();
            formData.append("auctionID", id);
            formData.append("auctionTitle", auction.auctionTitle);
            formData.append("auctionDescription", auction.auctionDescription);
            formData.append("auctionPrice", auction.auctionPrice);
            formData.append("endTime", auction.endTime);
            if (selectedImage) {
                formData.append("image", selectedImage);
            }
            console.log(formData);
            console.log(auction);

            await UpdateAuction(formData);
        } catch (error) {
            console.error("Updating auction failed:", error);
            setFetchError(error.message);
            console.log(fetchError);
        }
    }

    const handleChange = (e) => {
        setAuction({ ...auction, [e.target.name]: e.target.value });
    }

    return (
        <AuctionForm auction={auction} handleSubmit={handleSubmit} handleChange={handleChange}
            handleFileChange={handleFileChange} previewUrl={previewUrl} rubric="Update auction" buttonText="Update" />
    )
}

export default UpdateAuctionContainer;