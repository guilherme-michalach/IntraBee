import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

export function User ({ name }) {

    return (
        <View style={styles.container}>
            <EvilIcons style={styles.icon} name="user" size={66} color="black" />
            <Text style={styles.user}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 5,
    },
    icon: {
       textAlignVertical: "center" 
    },
    user: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: "bold"
    }
})