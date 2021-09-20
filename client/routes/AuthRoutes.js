import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
    return(
        <StackNavigator 
            initialRouteName = "SignIn"
        >
            <Stack.Screen
                name = "SignIn"
                component = {SignInScreen}
                options = {{ headerShown: false }}
            >
            </Stack.Screen>
            <Stack.Screen
                name = "SignUp"
                component = {SignUpScreen}
                options = {}
            >

            </Stack.Screen>
        </StackNavigator>
    );
}