import UserForm from "../components/UserForm/UserForm"
import { UpdateUser } from "../services/UserService";
import { AuthContext } from "../contexts/AuthContext";
import { UIContext } from "../contexts/UIContext";
import { useContext } from "react";

const UpdateUserContainer = () => {

    const {creds, setCreds} = useContext(AuthContext);
    const {isUpdateOpen, setIsUpdateOpen} = useContext(UIContext);

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        await UpdateUser(creds);
        setIsUpdateOpen(false);
        setCreds({ username: "", password: "" });
    }

    return(
        <UserForm handleSubmit={handleUpdateUser} text="Edit Profile" isOpen={isUpdateOpen} setIsOpen={setIsUpdateOpen}/>
    )

}

export default UpdateUserContainer;