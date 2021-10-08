import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

export function User ({ name }) {

    return (
        <View style={styles.container}>
            <EvilIcons style={styles.icon} name="user" size={50} color="black" />
            <Text style={styles.user}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
    },
    icon: {
       textAlignVertical: "center" 
    },
    user: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
    lastMessage: {

    }
})