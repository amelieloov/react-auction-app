
import AuctionCard from "../AuctionCard/AuctionCard"
import './AuctionList.css';

const AuctionList = ({auctionList, handleSearch, viewType}) => {

    const auctions = auctionList.map(auction => {
        return(<AuctionCard className="auctionCardStyle" key={auction.auctionID} onMouseDown={handleSearch} auction={auction}
        viewType={viewType}/>)
    })

    return(<>
        {auctions.length !== 0 ? <ul className="auctionListStyle">{auctions}</ul> : <h2>You don't have any auctions yet.</h2>}
    </>)
}

export default AuctionList;