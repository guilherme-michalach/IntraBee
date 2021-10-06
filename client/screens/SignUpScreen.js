import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';
export function SignUpScreen() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    return ( 
        
        
        <View style={styles.container}>
            
            <Text style={styles.name}>
            Intra Bee
            </Text>
            <MaterialCommunityIcons style={styles.bee} name="bee" size={100} color="black" />
            <Text style={styles.title}>
                Insira os dados abaixo:
            </Text>
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

