import { useState, createContext } from "react";

export const UIContext = createContext();

const UIProvider = (props) => {

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    // const [isAddAuctionOpen, setIsAuctionOpen] = useState(false);
    // const [isUpdateAuctionOpen, setUpdateAuctionOpen] = useState(false);

    // const openPanel = () => {setIsLoginOpen(true)};
    // const closePanel = () => {setIsLoginOpen(false)};

    return(<UIContext.Provider value={{isLoginOpen, setIsLoginOpen, isRegisterOpen, setIsRegisterOpen}}>
        {props.children}
    </UIContext.Provider>)
}

export default UIProvider;