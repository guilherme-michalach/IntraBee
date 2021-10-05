import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';

export default function SignUpScreen () {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

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
