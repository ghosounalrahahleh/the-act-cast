import { createContext, useContext, useRef, useState } from "react";

const GlobalContext = createContext(null);

export const ClientGlobalContextProvider = (props) => {
    const [profileTab, setProfileTab] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const contactUsRef = useRef(null);

    return (
        <GlobalContext.Provider value={{
            profileTab, setProfileTab,
            activeTab, setActiveTab,
            contactUsRef
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export const useClientGlobalContext = () => {
    return useContext(GlobalContext)
}
