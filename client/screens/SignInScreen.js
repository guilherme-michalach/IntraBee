import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';
import { useAuth } from "../contexts/AuthContext";
import SplashScreen from "./SplashScreen";

export default function SignInScreen () {
    const { authActions } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSignIn () {
        if (!email.trim() || !password.trim()) {
            Alert.alert("Preencha os campos adequadamente!");
        }

        setIsLoading(true);

        try {
            await authActions.signIn(email, password);
        } catch (error) {
            Alert.alert("Não foi possível realizar login.");
            setIsLoading(false);
        }
    }

    function handleNavigateSignUpScreen () {
        setState(initialState);
        navigation.push("SignUp");
    }

    if (isLoading) {
        return <SplashScreen />
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                IntraBee
            </Text>
            <Text style={styles.label}>
                E-mail
            </Text> 
                <TextInput 
                    placeholder="Digite seu E-mail" 
                    style={styles.input} 
                    value={email} 
                    onChangeText={setEmail}
                />
            <Text style={styles.label}>
                Senha
            </Text>
            <View style={styles.textHide}>
                <TextInput 
                    secureTextEntry={isPasswordVisible} 
                    placeholder="Digite sua senha" 
                    style={[styles.input, styles.inputSecure]}
                    value={password} 
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.visibleButton} onPress={() => setIsPasswordVisible(false)}>
                    <EvilIcons name="eye" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleNavigateSignUpScreen}>
                <Text>Não tem conta ainda? Cadastre-se</Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'rgb(255,250,205)',
        padding: 30
    },
    label: {
        fontSize: 18,
        marginTop: 10,
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        // borderColor: "",
        padding: 10,
    },
    button: {
        backgroundColor: "grey",
        borderRadius: 12,
        padding: 15,
        marginTop: 30
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontFamily: "monospace",
    },
    title: {
        textAlign:"center",
        fontSize: 32,
        marginBottom: 60,
        fontFamily: "monospace"
    },
    logo: {

    },
    textHide: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        // borderColor:
    },
    inputSecure: {
        flex: 1,
        borderWidth: 0
    },
    visibleButton: {
        width: 40,
        justifyContent: "center",
        alignItems:"center"
    }
})