
import './AuctionForm.css';
import { useContext } from 'react';
import { AuctionContext } from '../../contexts/AuctionContext';

const AuctionForm = ({ handleSubmit, rubric, buttonText }) => {

    const {auction, setAuction, previewUrl, setSelectedImage, setPreviewUrl} = useContext(AuctionContext);
    
    const handleChange = (e) => {
        setAuction({ ...auction, [e.target.name]: e.target.value });
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    }

    const handleSub = (e) => { 
        e.preventDefault();
        handleSubmit();
    }

    return (
        <form onSubmit={handleSub} className="formStyle">
            <h1>{rubric}</h1>

            <div className="unit">
                <label htmlFor="title">Title</label>
                <input className="title-input" type="text" name="auctionTitle" id="title" value={auction.auctionTitle} onChange={handleChange} />
            </div>
            <div className="unit">
                <label htmlFor="description">Description</label>
                <textarea className="description-input" type="text" name="auctionDescription" id="description" value={auction.auctionDescription} onChange={handleChange} />
            </div>
            <div className="unit">
                <label htmlFor="price">Start price ($)</label>
                <input className="price-input" type="number" name="auctionPrice" id="price" value={auction.auctionPrice} onChange={handleChange} />
            </div>
            <div className="unit">
                <label htmlFor="endtime">End time</label>
                <input className="date-input" type="datetime-local" name="endTime" id="endtime" value={auction.endTime} onChange={handleChange} />
            </div>
            <div className="unit">
                <label htmlFor="image">Image</label>
                <input type="file" accept="image/*" onChange={handleFileChange} name="image" id="image" />
                {previewUrl && <img src={previewUrl} alt="Preview" width="100" />}
            </div>
            <button className="button" type="submit">{buttonText}</button>
        </form>
    )
}

export default AuctionForm;