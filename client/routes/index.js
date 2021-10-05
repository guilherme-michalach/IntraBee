import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { HomeScreen } from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SplashScreen from "../screens/SplashScreen";

export function Routes () {
    const { accessToken, isLoading } = useAuth();
    
    return (
        <>
            {
                isLoading ? 
                <SplashScreen /> :
                accessToken ?
                <HomeScreen /> :
                <SignInScreen />
            }
        </>
    );
}