import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { handleEmailChange, handlePasswordChange } from "../utils/commonValidations";
import { useAuth } from "../contexts/AuthContext";
import { showErrorMessage } from "../utils/errorHandlers";

const initialState = {
    email: "",
    isEmailValid: false,    
    password: "",
    isPasswordValid: false,    
    isLoginValid: false,
    isLoading: false,       
}

export default function SignInScreen () {
    const { memoContext } = useAuth();
    const [state, setState] = useState(initialState);

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            isLoginValid: prevState.isEmailValid && prevState.isPasswordValid
        }));
    }, [state.isEmailValid, state.isPasswordValid]);

    async function handleSignIn() {
        setState(prevState => ({ ...prevState, isLoading: true }));

        try {
            await memoContext.signIn(state.email, state.password);
        } catch (error) {
            setState(prevState => ({
                ...prevState,
                isLoading: false,
                emailError: true,
                passwordError: true
            }));

            showErrorMessage(error);
        }
    }

    function handleNavigateSignUpScreen() {
        setState(initialState);
        navigation.push("SignUp");
    }

    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            
        </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
})