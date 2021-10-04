import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import moment from "moment";

export function Chat({ chatName, lastMessage, date }) {
    const formattedDate = moment(date).format("DD/MM/YYYY");

    return (
        <View style={styles.container}>
            <EvilIcons style={styles.icon} name="user" size={50} color="black" />
            <View style={styles.containerMessage}>
                <Text style={styles.user}>{chatName}</Text>
                <Text style={styles.lastMessage}>fazer last msg bd</Text>
            </View>
            <Text>{formattedDate}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10
    },
    containerMessage: {
        flex: 1
    },
    icon: {
       textAlignVertical: "center" 
    },
    user: {
        fontSize: 16,
        fontWeight: "bold"
    },
    lastMessage: {

    }
})