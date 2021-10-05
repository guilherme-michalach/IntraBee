import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';

export function SignUpScreen() {
    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
                Sign in with Facebook
            </Text>
        </LinearGradient>
    )
}

export function SinUpScreen() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    return (
        //<View style={styles.linearGradient}>
        <View colrors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
            <Text style={styles.title}>
                Insira os dados abaixo:
            </Text>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                    Sign in with Facebook
  </Text>
            </LinearGradient>
            <Text style={styles.label}>
                Nome
            </Text>
            <TextInput placeholder="Digite seu nome completo" style={styles.input} />
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
        //</View>
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
        alignItems: "center"
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    //  linearGradient: {
    //      heigth: 45,
    //      width: 100,
    //      marginTop: 15,
    //      borderRadius: 5,
    //      backgroundColorTop: "rgba(255,255,255, 0)", 
    //      backgroundColorBottom:"rgba(255,255,255, 1)"
    //  },
});

