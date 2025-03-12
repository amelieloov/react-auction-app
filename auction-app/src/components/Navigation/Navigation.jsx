
import { NavLink } from "react-router-dom";
import './Navigation.css';
import SearchBar from "../SearchBar/SearchBar";
import { UIContext } from '../../contexts/UIContext';
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from 'react';

const Navigation = () => {

    const { setIsLoginOpen, setIsRegisterOpen, setIsUpdateOpen } = useContext(UIContext);
    const { isLoggedIn, handleLogin, handleLogout } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <div className="left">
                </div>
                <div className="center">
                    <SearchBar />
                </div>
                <div className="right">
                    <NavLink to="/" className="navListItem">Home</NavLink>
                    {isLoggedIn && <NavLink to="/dashboard" className="navListItem">Dashboard</NavLink>}
                    <li className="navListItem" onMouseDown={isLoggedIn ? handleLogout : () => setIsLoginOpen(true)}>{isLoggedIn ? 'Logout' : 'Login'}</li>
                    {!isLoggedIn && <li className="navListItem" onMouseDown={() => setIsRegisterOpen(true)}>Register</li>}
                    {isLoggedIn && <li className="navListItem" onMouseDown={() => setIsUpdateOpen(true)}>Edit Profile</li>}
                    <li></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navigation;