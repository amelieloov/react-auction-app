
import './AuctionForm.css';

const AuctionForm = ({ auction, handleSubmit, handleChange, handleFileChange, previewUrl, buttonText}) => {

    return (
        <div className='outerStyle'>
            <form onSubmit={handleSubmit} className="formStyle">
                <div>
                    <label htmlFor="title">Title</label>
                    <input className="inputStyle" type="text" name="auctionTitle" id="title" value={auction.auctionTitle} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input className="inputStyle" type="text" name="auctionDescription" id="description" value={auction.auctionDescription} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input className="inputStyle" type="number" name="auctionPrice" id="price" value={auction.auctionPrice} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="endtime">End time</label>
                    <input className="inputStyle" type="datetime-local" name="endTime" id="endtime" value={auction.endTime} onChange={handleChange} />
                </div>
                <label htmlFor="image">Image</label>
            <input type="file" accept="image/*" value={auction.image} onChange={handleFileChange} name="image" id="image" />
            {previewUrl && <img src={previewUrl} alt="Preview" width="100" />}

                <button className="button" type="submit">{buttonText}</button>
            </form>
        </div>
    )
}

export default AuctionForm;