import UserForm from "../components/UserForm/UserForm"
import { UpdateUser } from "../services/UserService";
import { AuthContext } from "../contexts/AuthContext";
import { UIContext } from "../contexts/UIContext";
import { useContext } from "react";
import { toast } from "react-hot-toast";

const UpdateUserContainer = () => {

    const { creds, setCreds } = useContext(AuthContext);
    const { isUpdateOpen, setIsUpdateOpen } = useContext(UIContext);

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

    return (
        <UserForm handleSubmit={handleUpdateUser} text="Edit Profile" isOpen={isUpdateOpen} setIsOpen={setIsUpdateOpen} />
    )

}

export default UpdateUserContainer;