import UserForm from "../components/UserForm/UserForm"
import { CreateUser } from "../services/UserService";
import { AuthContext } from "../contexts/AuthContext";
import { UIContext } from "../contexts/UIContext";
import { useContext } from "react";

const AddUser = () => {

    const {creds, setCreds} = useContext(AuthContext);
    const {isRegisterOpen, setIsRegisterOpen} = useContext(UIContext);


    const handleChange = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await CreateUser(creds);
        setIsRegisterOpen(false);
    }

    return(
        <UserForm handleSubmit={handleSubmit} text="Register" isOpen={isRegisterOpen} setIsOpen={setIsRegisterOpen}/>
    )

}

export default AddUser;