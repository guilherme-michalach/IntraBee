import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import colors from "../theme/colors";

// Ver se eu implemento dessa forma ou se coloco um botão na tela de signIn pra levar pra signUp

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
    return(
        <Stack.Navigator 
            initialRouteName = "SignIn"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 44
                },
                headerTitleAlign: "center"
            }}
        >
            <Stack.Screen
                name = "SignIn"
                component = { SignInScreen }
                options = {{ headerShown: false }}
            />
            <Stack.Screen
                name = "SignUp"
                component = { SignUpScreen }
                options = {{ title: "Cadastro de Usuário" }}
            />
        </Stack.Navigator>
    );
}