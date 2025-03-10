import { useState, createContext } from "react";

export const UIContext = createContext();

const UIProvider = (props) => {

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    // const [isAddAuctionOpen, setIsAuctionOpen] = useState(false);
    // const [isUpdateAuctionOpen, setUpdateAuctionOpen] = useState(false);

    return(<UIContext.Provider value={{isLoginOpen, setIsLoginOpen, isRegisterOpen, setIsRegisterOpen, isEditMode, setIsEditMode}}>
        {props.children}
    </UIContext.Provider>)
}

export default UIProvider;