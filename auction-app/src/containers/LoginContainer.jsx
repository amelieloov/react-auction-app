
import UserForm from "../components/UserForm/UserForm"
import { Login } from "../services/UserService";
import { AuthContext } from "../contexts/AuthContext";
import { UIContext } from '../contexts/UIContext';

import { useContext } from "react";

const LoginContainer = () => {

    const {creds, setCreds} = useContext(AuthContext);
    const {isLoginOpen, setIsLoginOpen} = useContext(UIContext);

    const handleChange = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await Login(creds);
        setIsLoginOpen(false);
    }

    return(
        <UserForm username={creds.username} password={creds.password} handleChange={handleChange} handleSubmit={handleSubmit}
        buttonText="Login" isOpen={isLoginOpen} setIsOpen={setIsLoginOpen}/>
    )

}

export default LoginContainer;