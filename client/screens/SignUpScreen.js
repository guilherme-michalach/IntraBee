import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ScrollView } from "react-native";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { api } from "../services/api";
import { emailRegExp, passwordRegExp, phoneRegExp } from "../utils/regExpValidations";
import SplashScreen from "./SplashScreen";

export default function SignUpScreen ({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSignUp () {
        if(!name) return alert("Por favor insira seu nome!");
        else if (name.length < 3) return alert("No mínimo são necessários três caracteres!");

        // if(!email) return alert("Por favor insira seu e-mail!");

        if(!emailRegExp.test(email)) return alert("Por favor insira seu e-mail!");

        if(!passwordRegExp.test(password)) return alert("Por favor insira uma senha com no mínimo 6 caracteres, sendo ao menos um deles um número e outro letra!")

        if(!password) return alert("Por favor insira sua senha!");
        // else if(!password.length < 6) return alert("Por favor insira uma senha com no mínimo 6 caracteres!")

        if(!phone) return alert("Por favor insira seu telefone!");
        
        if(!phoneRegExp.test(phone)) return alert("Por favor insira um número de telefone válido");

        setIsLoading(true);

        try {
            const createUser = (await api.post("users", {
                name,
                email,
                phone,
                password,
            })).data;

            Alert.alert("Conta criada com sucesso!");
            navigation.push("SignIn")
        } catch (error) {
            Alert.alert("Não foi possível realizar o cadastro.");
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <SplashScreen />
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.name}>
                    IntraBee
                </Text>
                <MaterialCommunityIcons style={styles.bee} name="bee" size={100} color="black" />
                <Text style={styles.title}>
                    Insira seus dados:
                </Text>
                <Text style={styles.label}>
                    Nome
                </Text>
                    <TextInput 
                        placeholder= "Digite seu nome completo" 
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />
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
                    Telefone
                </Text>
                    <TextInput 
                        placeholder= "(99) 9999-99999" 
                        style={styles.input}
                        value={phone}
                        maxLength={9}
                        onChangeText={setPhone}
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
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.backgroundColor,
        padding: 30
    },
    scrollView: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    bee: {
        textAlign: "center"
    },
    label: {
        fontSize: 18,
        marginTop: 10,
        color: "black",  
    },
    input: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: colors.button,
        padding: 10,
        paddingStart: 1,
        paddingVertical: 0,
        marginVertical: 5
    },
    button: {
        backgroundColor: colors.secundary,
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
        marginTop: 20,
        fontSize: 22,
        fontFamily: "monospace",
        paddingBottom:20
    },
    name: {
        fontSize: 60,
        textAlign: "center",
        marginTop:10,
        fontFamily: "Roboto"       
    },
    textHide: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "rgb(47,79,79)",
    },
    inputSecure: {
        flex: 1,
        borderBottomWidth: 0
    },
    visibleButton: {
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
});
