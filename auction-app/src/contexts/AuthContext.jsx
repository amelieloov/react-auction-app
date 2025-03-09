import { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [creds, setCreds] = useState({username: "", password:""});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

        return(<AuthContext.Provider value={{creds, setCreds, isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </AuthContext.Provider>)
}

export default AuthProvider;