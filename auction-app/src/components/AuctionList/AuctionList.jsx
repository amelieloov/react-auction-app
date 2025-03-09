
import AuctionCard from "../AuctionCard/AuctionCard"
import './AuctionList.css';

const AuctionList = ({auctionList, handleSearch, viewType}) => {

    const auctions = auctionList.map(auction => {
        return(<AuctionCard className="auctionCardStyle" key={auction.auctionID} onMouseDown={handleSearch} auction={auction}
        viewType={viewType}/>)
    })

    return(<>
        <ul className="auctionListStyle">{auctions}</ul>
    </>)
}

export default AuctionList;