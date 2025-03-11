import { useState } from "react"
import './SearchBar.css'
import { useContext } from "react";
import { AuctionContext } from "../../contexts/AuctionContext";
import { ErrorContext } from "../../contexts/ErrorContext";

const SearchBar = ({handleSearch}) => {

    const [inputValue, setInputValue] = useState("");
    const {searchError} = useContext(AuctionContext);

    const onSearch = (e) => {
        if(e.key === "Enter"){
            handleSearch(inputValue);
            setInputValue("");
        }
    }

    const onChange = (e) => {
        setInputValue(e.target.value);
    }

    return(
        <input className="search-bar" type="text" value={inputValue} onChange={onChange} onKeyDown={onSearch}
        placeholder= {searchError ? "No results" : "Search auctions..."}/>
    )
}

export default SearchBar;