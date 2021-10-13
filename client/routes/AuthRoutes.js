import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import colors from "../theme/colors";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName = "SignIn"
            >
                <Stack.Screen
                    name = "SignIn"
                    component = { SignInScreen }
                    options = {{ headerShown: false }}
                />
                <Stack.Screen
                    name = "SignUp"
                    component = { SignUpScreen }
                    options = {{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}