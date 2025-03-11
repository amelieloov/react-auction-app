import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [creds, setCreds] = useState({ username: "", password: "" });

    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const [isLoggedIn, setIsLoggedIn] = useState(storedIsLoggedIn);
    const [user, setUser] = useState({});

    const navigate = useNavigate();
  
    useEffect(() => {
      localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('AuthToken');
        navigate("/");
    };

    return (<AuthContext.Provider value={{ creds, setCreds, isLoggedIn, setIsLoggedIn, handleLogin, handleLogout, user, setUser }}>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthProvider;