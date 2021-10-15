import React, { useEffect, useReducer } from "react";
import SplashScreen from "../screens/SplashScreen";
import { api } from "../services/api";
import { useAuth } from "./AuthContext";

const UserContext = React.createContext();

const initialState = {
    user: null,
    isLoading: true
}

function reducer(prevState, action) {
    switch(action.type) {
        case "GET_USER":
            return {
                ...prevState,
                user: action.user,
                isLoading: false
            }
        case "REMOVE_USER":
            return {
                ...prevState,
                user: null
            }        
    }
}

export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const auth = useAuth();

    console.log(auth);

    useEffect(() => {        
        async function getUser() {
            let user;

            try {
                user = (await api.get("/users/me")).data; 
                
                dispatch({ type: "GET_USER", user });
            } catch (err) {                
                if (err.response?.status === 401) {
                    auth.authActions.signOut();
                }
            }                                                                                  
        }

        getUser();        
    }, [auth.accessToken]);

    if (state.isLoading) {
        return <SplashScreen />
    }

    return (
        <UserContext.Provider value={{ currentUser: state.user, removeUser: () => dispatch({ type: "REMOVE_USER" })}}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => React.useContext(UserContext);