import React from "react";
import { api } from "../services/api";
import * as SecureStore from "expo-secure-store";

const AuthContext = React.createContext();

const initialState = {
    isLoading: true,
    accessToken: null
}

// Opções de o que fazer em cada caso de acesso.

function reducer (prevState, action) {
    switch(action.type) {
        case "RESTORE_TOKEN":
            return {
                ...prevState,
                accessToken: action.token,
                isLoading: false
            }
        case "SIGN_IN":
            return {
                ...prevState,
                accessToken: action.token
            }
        case "SIGN_OUT": {
            return {
                ...prevState,
                accessToken: null
            }
        }
    }
}

export const useAuth = () => React.useContext(AuthContext);

// Caso em que há a tentiva de restaurar login

export function AuthProvider ({ children }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        async function restoreToken() {
            let accessToken;

            try {
                accessToken = await SecureStore.getItemAsync("access-token");
            } catch (error) {
                console.log(error);
            }

            setTimeout(() => dispatch({ type: "RESTORE_TOKEN", token: accessToken }), 3000);
            //Modificar tempo depois ou até mesmo tirar timeout pra não ficar tendo delays no app
        }

        restoreToken();
    }, []);



    const memoContext = React.useMemo(() => ({
        signIn: async (email, password) => {
            try {
                const accessToken = (await api.post("/auth/login", { email, password })).data;

                await SecureStore.setItemAsync("access-token", accessToken);

                api.defaults.header.common["Authorization"] = `Bearer ${accessToken}`;

                dispatch({ type: "SIGN_IN", token: accessToken });
            } catch (error) {
                console.log(error);
                throw(error);
            }
        },
        signUp: async(user) => {
            try {
                await api.post("/users", { ...user });
            } catch (error) {
                console.log(error);
                throw(error);
            }
        }
        ,
        signOut: async (user) => {
            try {
                SecureStore.deleteItemAsync("access-token")
            } catch (error) {
                console.log(error);
                throw(error);
            }
        }
    }), []);

    return (
        <AuthContext.Provider value={{ state, memoContext }}>
            { children }
        </AuthContext.Provider>
    )

}