import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';

<<<<<<< HEAD
const initialState = {
    email: "",
    isEmailValid: false,    
    password: "",
    isPasswordValid: false,    
    isLoginValid: false,
    isLoading: false,                                                          
}

export function SignInScreen ({ navigation }) {
    const { memoContext } = useAuth();    
    const [state, setState] = useState(initialState);
    
    useEffect(() => {        
        setState(prevState => ({
            ...prevState, 
            isLoginValid: prevState.isEmailValid && prevState.isPasswordValid
        }));
    }, [state.isEmailValid, state.isPasswordValid]);

    async function handleSignIn () {
        setState(prevState => ({ ...prevState, isLoading: true }));
        try {            
            await memoContext.signIn(state.email, state.password);
        } catch (err) {
            setState(prevState => ({ 
                ...prevState, 
                isLoading: false,                 
                emailError: true,                
                passwordError: true
            }));
            showErrorMessage(err);
        }        
    }

    function handleNavigateSignUpScreen () {
        setState(initialState);
        navigation.push("SignUp");
    }

    return (            
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <Loader isVisible={state.isLoading} />
            <MaterialIcons name="add-task" size={200} color={colors.primary} />
            <ValidationInput 
                value={state.email}
                onChangeText={text => handleEmailChange(text, setState)}
                placeholder="Se u e-mail"
                labelText="E-mail"
                keyboardType="email-address"
                isValid={state.isEmailValid} />
            
            <ValidationInput 
                value={state.password}
                onChangeText={text => handlePasswordChange(text, setState)}
                placeholder="Sua senha"
                labelText="Senha"
                secureTextEntry={true}
                isValid={state.isPasswordValid} />
            <TouchableOpacity onPress={handleNavigateSignUpScreen}>
                <Text>Não tem conta ainda? Cadastre-se</Text>
            </TouchableOpacity>   
            <View style={{ width: "100%", margin: 10 }}>
                <Button 
                    text="Login" 
                    onPress={handleSignIn}
                    disabled={!state.isLoginValid}/>
=======
export default function SignInScreen () {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                IntraBee
            </Text>
            <Text style={styles.label}>
                E-mail
            </Text> 
                <TextInput placeholder="Digite seu E-mail" style={styles.input} />
            <Text style={styles.label}>
                Senha
            </Text>
            <View style={styles.textHide}>
                <TextInput secureTextEntry={isPasswordVisible} placeholder="Digite sua senha" style={[styles.input, styles.inputSecure]} />
                <TouchableOpacity style={styles.visibleButton} onPress={() => setIsPasswordVisible(false)}>
                    <EvilIcons name="eye" size={24} color="black" />
                </TouchableOpacity>
>>>>>>> 67104f1bd37f35988652f8c68378f207477533a8
            </View>
            <TouchableOpacity style={styles.button}>
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
        fontSize: 20,
        fontWeight: "bold"
    },
    title: {

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