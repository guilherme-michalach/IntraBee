import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';

export default function SignUpScreen ({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                IntraBee
            </Text>
            <Text style={style.label}>
                Nome
            </Text>
                <TextInput placeholder= "Digite seu nome completo" style={styles.input}/>
            <Text style={styles.label}>
                E-mail
            </Text> 
                <TextInput placeholder="Digite seu E-mail" style={styles.input} />
            <Text style={style.label}>
                Telefone
            </Text>
                <TextInput placeholder= "Digite seu telefone" style={styles.input}/>
            <Text style={styles.label}>
                Senha
            </Text>
            <View style={styles.textHide}>
                <TextInput secureTextEntry={isPasswordVisible} placeholder="Digite sua senha" style={[styles.input, styles.inputSecure]} />
                <TouchableOpacity style={styles.visibleButton} onPress={() => setIsPasswordVisible(false)}>
                    <EvilIcons name="eye" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
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
    label: {
        fontSize: 18, 
        marginTop: 10,
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: "grey",
    },
    bee: {
        textAlign: "center"
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
        color: "black"
    },
    logo: {
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
        borderWidth: 1,
    },
    inputSecure: {
        flex: 1,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor:"rgb(47,79,79)",
    },
    visibleButton: {
        width: 40,
        justifyContent: "center",
        alignItems:"center"
    },
});
