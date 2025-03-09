import { useState } from "react"
import { SearchAuctions } from '../services/AuctionService';
import AuctionList from "../components/AuctionList/AuctionList";
import SearchBar from '../components/SearchBar/SearchBar';

const SearchContainer = () => {
    
    const [auctionList, setAuctionList] = useState([]);

    const handleSearch = async (condition) => {
        const data = await SearchAuctions(condition);
        setAuctionList(data);
        console.log("in container", auctionList);
    }

    return(
        <>
            <SearchBar handleSearch={handleSearch}/>
            <AuctionList auctionList={auctionList} handleSearch={handleSearch} viewType="search"/>
        </>
    )
}

export default SearchContainer;