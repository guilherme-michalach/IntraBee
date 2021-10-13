import React from "react";
import { useAuth } from "../contexts/AuthContext";
import SignInScreen from "../screens/SignInScreen";
import SplashScreen from "../screens/SplashScreen";
import { AppRoutes } from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";

export function Routes () {
    const { accessToken, isLoading } = useAuth();
    
    return (
        <>
            {
                isLoading ? 
                <SplashScreen /> :
                accessToken ?
                <AppRoutes /> :
                <AuthRoutes />
            }
        </>
    );
}