
import './AuctionForm.css';
import { useContext } from 'react';
import { AuctionContext } from '../../contexts/AuctionContext';

const AuctionForm = ({ auction, handleSubmit, handleChange, handleFileChange, previewUrl, rubric, buttonText }) => {

    const {fetchError} = useContext(AuctionContext);

    return (
        <form onSubmit={handleSubmit} className="formStyle">
            <h1>{rubric}</h1>
            {fetchError && (
                <p>
                    {fetchError}
                </p>
            )}
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