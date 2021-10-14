import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { api } from "../services/api";
import { emailRegExp, passwordRegExp } from "../utils/regExpValidations";
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
        if(!email) return alert("Por favor insira seu e-mail!");

        if(!emailRegExp.test(email)) return alert("Por favor insira seu e-mail!");

        if(!password) return alert("Por favor insira sua senha!");
        if(!phone) return alert("Por favor insira seu telefone!");

        setIsLoading(true);

        try {
            // const createUser = (await api.post("users")).data;
            const createUser = (await api.post("users", {
                name,
                email,
                phone,
                password,
            })).data;

            navigation.push("SignIn")

            // setIsLoading(false);
        } catch (error) {
            Alert.alert("Não foi possível realizar o cadastro.");
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <SplashScreen />
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                IntraBee
            </Text>
            <MaterialCommunityIcons style={styles.bee} name="bee" size={100} color="black" />
            <Text style={styles.title}>
                Insira os dados abaixo:
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
                    placeholder= "Digite seu telefone" 
                    style={styles.input}
                    value={phone}
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
        borderColor: 'black',
        padding: 10,
    },
    button: {
        backgroundColor:  'rgb(192,192,192)',
        borderRadius: 12,
        padding: 15,
        marginTop: 30
    },
    buttonText: {
        textAlign: "center",
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },
    title: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 25,
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
        borderColor:"rgb(47,79,79)",
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
