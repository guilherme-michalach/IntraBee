import React from "react";
import { useAuth } from "../contexts/AuthContext";
import SignInScreen from "../screens/SignInScreen";
import SplashScreen from "../screens/SplashScreen";
import { AppRoutes } from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { UserProvider } from "../contexts/UserContext";

export function Routes () {
    const { accessToken, isLoading } = useAuth();
    
    return (
        <>
            {
                isLoading ? 
                <SplashScreen /> :
                accessToken ?
                <UserProvider>
                    <AppRoutes /> 
                </UserProvider> :
                <AuthRoutes />
            }
        </>
    );
}