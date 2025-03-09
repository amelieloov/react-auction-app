
import './UserForm.css';

const UserForm = ({ username, password, handleChange, handleSubmit, buttonText, isOpen, setIsOpen }) => {

    return (
        <>
            <div className={`overlay ${isOpen ? "active" : ""}`} onClick={() => { setIsOpen(false) }} id="overlay"></div>
            <div className={`side-panel ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(true)} >
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <button className='user-button close-button' onMouseDown={() => setIsOpen(false)}>X</button>
                    <input type="text" name="username" value={username} onChange={handleChange} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} />
                    <button className="user-button" type="submit">{buttonText}</button>
                </form>
            </div>
        </>
    )
}

export default UserForm;