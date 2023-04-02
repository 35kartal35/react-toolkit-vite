import { createContext, useState } from "react";


const initialValue = {};


export const AuthTokenContext = createContext(initialValue);

export default function AuthTokenContextProvider(props) {
    const [token, setToken] = useState(null);

    const contextValue = {
        token,
        setToken,
    };

    return (
        <AuthTokenContext.Provider value={contextValue}>
            {props.children}
        </AuthTokenContext.Provider>
    );
}