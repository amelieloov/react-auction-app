import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [creds, setCreds] = useState({ username: "", password: "" });

    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const [isLoggedIn, setIsLoggedIn] = useState(storedIsLoggedIn);
  
    useEffect(() => {
      localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (<AuthContext.Provider value={{ creds, setCreds, isLoggedIn, setIsLoggedIn, handleLogin, handleLogout }}>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthProvider;