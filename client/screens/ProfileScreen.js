import React from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../theme/colors";
import { Ionicons } from '@expo/vector-icons';


export default function ProfileScreen () {

    return (
        <View style={styles.container}>
            <Ionicons name="person-circle-outline" size={24} color="black" />
            <Text style={styles.title}>
                IntraBee
            </Text>
            <Text style={style.label}>
                Nome de Usuário
            </Text>
                <TextInput placeholder= "--Nome do usuário--" style={styles.input}/>
            <Text style={styles.label}>
                E-mail
            </Text> 
                <TextInput placeholder="E-mail do usuário" style={styles.input} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Editar informações
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
        color: "black",
     
    },
    button: {
        backgroundColor:  'rgb(252, 252, 76)',
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
    visibleButton: {
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    
   
});