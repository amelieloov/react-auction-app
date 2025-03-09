
import {Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';
import DetailedAuctionInfo from '../../pages/DetailedAuctionInfo';
import AddAuctionContainer from '../../pages/AddAuction';
import UpdateAuctionContainer from '../../pages/UpdateAuction';

const Main = () => {

    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/item/:id" element={<DetailedAuctionInfo/>}></Route>
            <Route path="/add/auction" element={<AddAuctionContainer/>}></Route>
            <Route path="/update/auction" element={<UpdateAuctionContainer/>}></Route>
        </Routes>
    )
}

export default Main;