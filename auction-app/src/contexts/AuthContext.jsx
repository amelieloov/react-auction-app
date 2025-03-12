import { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { UIContext } from "./UIContext";
import { toast } from "react-hot-toast";
import { Login } from "../services/UserService";
import { CreateUser } from "../services/UserService";
import { UpdateUser } from "../services/UserService";
import { GetUser } from "../services/UserService";

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [creds, setCreds] = useState({ username: "", password: "" });
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const [isLoggedIn, setIsLoggedIn] = useState(storedIsLoggedIn);
    const [user, setUser] = useState({});
    
    const {setIsLoginOpen, setIsRegisterOpen, setIsUpdateOpen} = useContext(UIContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    const handleLogin = async (e) => {
        try{
            e.preventDefault();
            const result = await Login(creds);
            if(result){
                setIsLoginOpen(false);
                setIsLoggedIn(true);
                var currentUser = await GetUser();
                setUser(currentUser);
                setCreds({ username: "", password: "" });
            }
            toast.success('Successfully logged in.');
        } catch (error){
            toast.error(error.message);
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('AuthToken');
        navigate("/");
    };

    const handleAddUser = async (e) => {
        try{
            e.preventDefault();
            await CreateUser(creds);
            setIsRegisterOpen(false);
            setCreds({ username: "", password: "" });
        } catch (error){
            toast.error(error.message);
        }
    }

    const handleUpdateUser = async (e) => {
        try {
            e.preventDefault();
            await UpdateUser(creds);
            setIsUpdateOpen(false);
            setCreds({ username: "", password: "" });
            toast.success("User successfully updated.")
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (<AuthContext.Provider value={{ creds, setCreds, isLoggedIn, setIsLoggedIn, handleLogin, handleLogout, 
    user, setUser, handleAddUser, handleUpdateUser }}>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthProvider;