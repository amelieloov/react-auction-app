
import UserForm from "../components/UserForm/UserForm"
import { Login } from "../services/UserService";
import { AuthContext } from "../contexts/AuthContext";
import { UIContext } from '../contexts/UIContext';
import { toast } from 'react-hot-toast';

import { useContext } from "react";

const LoginContainer = () => {

    const {creds, setCreds, setIsLoggedIn, showError} = useContext(AuthContext);
    const {isLoginOpen, setIsLoginOpen} = useContext(UIContext);

    const handleLogin = async (e) => {
        try{
            e.preventDefault();
            const result = await Login(creds);
            console.log(result);
            if(result){
                setIsLoginOpen(false);
                setIsLoggedIn(true);
                setCreds({ username: "", password: "" });
            }
            toast.success('Successfully logged in.');
        } catch (error){
            toast.error("Invalid credentials.")
        }
    }

    return(
        <UserForm handleSubmit={handleLogin} text="Login" isOpen={isLoginOpen} setIsOpen={setIsLoginOpen}/>
    )

}

export default LoginContainer;