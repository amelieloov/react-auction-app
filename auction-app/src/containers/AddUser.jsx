import UserForm from "../components/UserForm/UserForm"
import { CreateUser } from "../services/UserService";
import { AuthContext } from "../contexts/AuthContext";
import { UIContext } from "../contexts/UIContext";
import { useContext } from "react";
import { toast } from 'react-hot-toast';

const AddUser = () => {

    const {creds, setCreds, showError} = useContext(AuthContext);
    const {isRegisterOpen, setIsRegisterOpen} = useContext(UIContext);

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

    return(
        <UserForm handleSubmit={handleAddUser} text="Register" isOpen={isRegisterOpen} setIsOpen={setIsRegisterOpen}/>
    )

}

export default AddUser;