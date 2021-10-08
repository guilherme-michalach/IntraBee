import React from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';
import iconSet from "@expo/vector-icons/build/Fontisto";


export default function ProfileScreen () {

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
            <EvilIcons name="user" size={250} color="black" />
            </View>
            <Text style={styles.title}>
                Perfil
            </Text>
            <Text style={styles.label}>
                Nome de Usuário
            </Text>
                <TextInput placeholder= "Nome do usuário" style={styles.input}/>
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
        padding: 40
    },
    icon: {
        flex: 1,
        padding: 40,
        marginBottom: 10,
        justifyContent: 'center'
    },
    label: {
        fontSize: 18,
        marginTop: 60,
        color: "black"
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor:"rgb(47,79,79)",
    },
    button: {
        backgroundColor:  'rgb(192, 192, 192)',
        borderRadius: 12,
        padding: 15,
        marginTop: 125
    },
    buttonText: {
        textAlign: "center",
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },
    title: {
        textAlign: "center",
        marginTop: 0,
        fontSize: 25,
        paddingBottom:40
    },
    visibleButton: {
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    
   
});
