
import { NavLink } from "react-router-dom";
import './Navigation.css';
import SearchBar from "../SearchBar/SearchBar";
import { AuctionContext } from "../../contexts/AuctionContext";
import { UIContext } from '../../contexts/UIContext';
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from 'react';

const Navigation = () => {

    const { handleSearch } = useContext(AuctionContext);
    const { setIsLoginOpen, setIsRegisterOpen } = useContext(UIContext);
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <div className="left">
                    <h1>Tredera</h1>
                </div>
                <div className="center">
                    <SearchBar handleSearch={handleSearch} />
                </div>
                <div className="right">
                    <NavLink to="/" className="navListItem">Home</NavLink>
                    {isLoggedIn && <NavLink to="/dashboard" className="navListItem">Dashboard</NavLink>}
                    <li className="navListItem" onMouseDown={() => setIsLoginOpen(true)}>Login</li>
                    <li className="navListItem" onMouseDown={() => setIsRegisterOpen(true)}>Register</li>
                </div>
            </ul>
        </nav>
    )
}

export default Navigation;