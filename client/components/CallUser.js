import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function CallUser ({ name }) {

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <EvilIcons style={styles.icon} name="user" size={66} color="black" />
                <Text style={styles.user}>{name}</Text>
                <Ionicons name="call" size={24} color="black" />
            </View>
        </TouchableOpacity>
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