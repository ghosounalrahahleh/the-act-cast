import { createContext, useContext } from "react";

const GlobalContext = createContext(null);

export const AdminGlobalContextProvider = (props) => {

    return (
        <GlobalContext.Provider value={{

        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export const useAdminGlobalContext =() => {
    return useContext(GlobalContext)
}
