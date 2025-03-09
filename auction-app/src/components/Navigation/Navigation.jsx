
import { NavLink } from "react-router-dom";
import './Navigation.css';
import SearchContainer from "../../containers/SearchContainer";
import { UIContext } from '../../contexts/UIContext';
import {useContext} from 'react';

const Navigation = () => {

    const {setIsLoginOpen, setIsRegisterOpen} = useContext(UIContext);

    return (
        <nav className="navbar">
            <ul className="flex navList">
                <SearchContainer className="searchBar"/>
                <NavLink to="/" className="navListItem">Home</NavLink>
                <NavLink to="/dashboard" className="navListItem">Dashboard</NavLink>
                <li className="navListItem" onMouseDown={() => setIsLoginOpen(true)}>Login</li>
                <li className="navListItem" onMouseDown={() => setIsRegisterOpen(true)}>Register</li>
            </ul>
        </nav>
    )
}

export default Navigation;