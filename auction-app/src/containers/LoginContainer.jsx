
import UserForm from "../components/UserForm/UserForm"
import { Login } from "../services/UserService";
import { AuthContext } from "../contexts/AuthContext";
import { UIContext } from '../contexts/UIContext';

import { useContext } from "react";

const LoginContainer = () => {

    const {creds, setCreds, setIsLoggedIn} = useContext(AuthContext);
    const {isLoginOpen, setIsLoginOpen} = useContext(UIContext);

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            await Login(creds);
            setIsLoginOpen(false);
            setIsLoggedIn(true);
        } catch (error){
            console.log("Error while logging in: ", error);
        }
    }

    return(
        <UserForm handleSubmit={handleSubmit} text="Login" isOpen={isLoginOpen} setIsOpen={setIsLoginOpen}/>
    )

}

export default LoginContainer;