
import './UserForm.css';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

const UserForm = ({ handleSubmit, text, isOpen, setIsOpen }) => {

    const { creds, setCreds} = useContext(AuthContext);

    const handleChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className={`overlay ${isOpen ? "active" : ""}`} onClick={() => { setIsOpen(false) }} id="overlay"></div>
            <div className={`side-panel ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(true)} >
                <form onSubmit={handleSubmit}>
                    <h2>{text}</h2>
                    <label htmlFor="username">Username</label>
                    <button className='user-button close-button' onMouseDown={() => setIsOpen(false)}>X</button>
                    <input type="text" name="username" value={creds.username} onChange={handleChange} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={creds.password} onChange={handleChange} />
                    <button className="user-button" type="submit" onClick={() => { setIsOpen(false) }}>{text}</button>
                </form>
            </div>
        </>
    )
}

export default UserForm;