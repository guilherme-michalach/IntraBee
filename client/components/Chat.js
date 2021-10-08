import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import moment from "moment";

export function Chat({ chatName, lastMessage, date, openChat }) {
    const formattedDate = moment(date).format("DD/MM/YYYY");

    return (
        <TouchableOpacity style={styles.container} onPress={openChat}>
                <EvilIcons style={styles.icon} name="user" size={50} color="black" />
                <View style={styles.containerMessage}>
                    <Text style={styles.user}>{chatName}</Text>
                    <Text numberOfLines={1} style={styles.lastMessage}>{lastMessage}</Text>
                </View>
                <Text>{formattedDate}</Text>
        </TouchableOpacity>
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