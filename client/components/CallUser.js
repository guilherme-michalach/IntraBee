import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function CallUser ({ name, openCall }) {

    return (
            <View style={styles.container}>
                <EvilIcons style={styles.icon} name="user" size={66} color="black" />
                <View style={styles.userContainer}>
                    <Text style={styles.user}>{name}</Text>
                </View>
                    <TouchableOpacity onPress={openCall}>
                        <Ionicons name="call" size={24} color="black" style={styles.call} />
                    </TouchableOpacity>
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
    userContainer: {
        flex: 1,
        // flexDirection: "row",
        textAlign: "center",
        paddingVertical: 3,
        paddingHorizontal: 3,
        justifyContent: "center",
    },
    user: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
    call: {
        paddingRight: 20,
        textAlignVertical: "center",
        textAlign: "right"
    }
})