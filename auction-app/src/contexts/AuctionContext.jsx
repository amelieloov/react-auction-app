
import { useState, createContext } from "react";

export const AuctionContext = createContext();

const AuctionProvider = (props) => {

    const [auctions, setAuctions] = useState([]);
    const [auction, setAuction] = useState({ auctionTitle: "", auctionDescription: "", auctionPrice: "", endTime: ""})

    return(<AuctionContext.Provider value={{auction, auctions}}>
        {props.children}
    </AuctionContext.Provider>)
}

export default AuctionProvider;