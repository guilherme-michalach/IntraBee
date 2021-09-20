import React from "react";
import { api } from "../services/api";
import * as SecureStore from "expo-secure-store";
import { showErrorMessage } from "../utils/errorHandlers";
import axios from "axios";

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
            } catch (error) {
                throw(error);
            }
        }
    }))

}