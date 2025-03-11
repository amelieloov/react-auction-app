
import AuctionForm from "../components/AuctionForm/AuctionForm";
import { useState, useEffect, useContext } from "react";
import { UpdateAuction } from "../services/AuctionService";
import { AuctionContext } from "../contexts/AuctionContext";
import { useParams } from "react-router-dom";
import { GetAuctionById } from "../services/AuctionService";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

const UpdateAuctionContainer = () => {

    const { auction, setAuction } = useContext(AuctionContext);
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        const getAuction = async () => {
            const auction = await GetAuctionById(id);
            setAuction(auction);
            setPreviewUrl(`https://localhost:7242${auction.image}`);
            //setSelectedImage(`https://localhost:7242${auction.image}`)
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

    const handleUpdateAuction = async (e) => {
        try {
            e.preventDefault();

            const formData = new FormData();
            formData.append("auctionID", id);
            formData.append("auctionTitle", auction.auctionTitle);
            formData.append("auctionDescription", auction.auctionDescription);
            formData.append("auctionPrice", auction.auctionPrice);
            formData.append("endTime", auction.endTime);
            if (selectedImage) {
                formData.append("image", selectedImage);
            }

            await UpdateAuction(formData);
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <AuctionForm auction={auction} handleSubmit={handleUpdateAuction}
            handleFileChange={handleFileChange} previewUrl={previewUrl} rubric="Update auction" buttonText="Update" />
    )
}

export default UpdateAuctionContainer;