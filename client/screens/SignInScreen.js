import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';
import { useAuth } from "../contexts/AuthContext";
import SplashScreen from "./SplashScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SignInScreen ({ navigation }) {
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

    if (isLoading) {
        return <SplashScreen />
    }

    return (
        <View style={styles.container} >
             <Text style={styles.title}>
                IntraBee
            </Text>
            <MaterialCommunityIcons style={styles.bee} name="bee" size={100} color="black" />
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
            <TouchableOpacity style={styles.register} onPress={() => navigation.push("SignUp")}>
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
        backgroundColor: colors.backgroundColor,
        padding: 30
    },
    bee: {
        textAlign: "center",
        marginBottom:70
    },
     register: {
        textAlign:"center",
        alignItems: "center",
        padding: 15,
        marginTop: 10
    },
    label: {
        fontSize: 18,
        marginVertical: 12
    },
    input: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: colors.button,
        padding: 10,
        paddingStart: 1,
        paddingVertical: 0,
        marginBottom: 4
    },
    button: {
        backgroundColor:  colors.secundary,
        borderRadius: 12,
        padding: 15,
        marginTop: 30
    },
    buttonText: {
        textAlign: "center",
        color: colors.primary,
        fontSize: 20,
        fontWeight: "bold"
    },
    title: {
        textAlign: "center",
        marginTop: 5,
        fontSize: 40,
        fontFamily: "monospace",
        paddingBottom:10
    },
    textHide: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
    },
    inputSecure: {
        flex: 1,
        borderBottomWidth: 0
    },
    visibleButton: {
        width: 40,
        justifyContent: "center",
        alignItems:"center"
    }
})