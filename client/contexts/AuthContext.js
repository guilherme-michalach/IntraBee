import React, { useEffect, useReducer, useContext, createContext } from "react";
import { api } from "../services/api";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext();

const initialState = {
    isLoading: true,
    accessToken: null
};

function reducer (prevState, action) {
    switch (action.type) {
        case "RESTORE_TOKEN":
            return {
                ...prevState,
                isLoading: false,
                accessToken: action.payload
            }
        case "SIGN_IN":
            return {
                ...prevState,
                accessToken: action.payload
            }
        case "SIGN_OUT":
            return {
                ...prevState,
                accessToken: null
            }
    }
}

export const useAuth = () => useContext(AuthContext);

export function AuthProvider ({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function getAccessToken() {
            let accessToken;

            try {
                accessToken = await SecureStore.getItemAsync("access-token");
                api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
            } catch (error) {
                console.log(error);
            }

            dispatch({ type: "RESTORE_TOKEN", payload: accessToken });
        };

        getAccessToken();
    }, []);

    const authActions = {
        signIn: async (email, password) => {
            try {
                const accessToken = (await api.post("/auth/login", { email, password })).data;

                await SecureStore.setItemAsync("access-token", accessToken);
                api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;

                dispatch({ type: "SIGN_IN", payload: accessToken });
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        signOut: async () => {
            await SecureStore.deleteItemAsync("access-token");
            api.defaults.headers["Authorization"] = null;

            dispatch({ type: "SIGN_OUT" });
        }
    }

    return (
        <AuthContext.Provider value={{ accessToken: state.accessToken, isLoading: state.isLoading, authActions }}>
            { children }
        </AuthContext.Provider>
    );
};

