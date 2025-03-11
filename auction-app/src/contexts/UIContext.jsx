import { useState, createContext } from "react";

export const UIContext = createContext();

const UIProvider = (props) => {

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);

    // const [isAddAuctionOpen, setIsAuctionOpen] = useState(false);
    // const [isUpdateAuctionOpen, setUpdateAuctionOpen] = useState(false);

    return(<UIContext.Provider value={{isLoginOpen, setIsLoginOpen, isRegisterOpen, setIsRegisterOpen, isUpdateOpen, setIsUpdateOpen}}>
        {props.children}
    </UIContext.Provider>)
}

export default UIProvider;