import { useState } from "react"
import './SearchBar.css'

const SearchBar = ({handleSearch}) => {

    const [inputValue, setInputValue] = useState("");

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
        placeholder="Search auctions..."/>
    )
}

export default SearchBar;