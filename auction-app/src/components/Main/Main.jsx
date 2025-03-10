
import {Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';
import DetailedAuctionInfo from '../../pages/DetailedAuctionInfo';
import AddAuctionContainer from '../../pages/AddAuction';
import UpdateAuctionContainer from '../../pages/UpdateAuction';
import SearchResults from '../../pages/SearchResults';

const Main = () => {

    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/item/:id" element={<DetailedAuctionInfo/>}></Route>
            <Route path="/auction/add" element={<AddAuctionContainer/>}></Route>
            <Route path="/auction/update/:id" element={<UpdateAuctionContainer/>}></Route>
            <Route path="/searchresults" element={<SearchResults/>}></Route>
        </Routes>
    )
}

export default Main;