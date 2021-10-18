import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import moment from "moment";

export function Chat({ chatName, lastMessage, date, openChat }) {
    const formattedDate = moment(date).format("DD/MM/YYYY");

    return (
        <TouchableOpacity style={styles.container} onPress={openChat}>
                <EvilIcons style={styles.icon} name="user" size={66} color="black" />
                <View style={styles.containerMessage}>
                    <Text style={styles.user}>{chatName}</Text>
                    <Text numberOfLines={1} style={styles.lastMessage}>{lastMessage}</Text>
                </View>
                <Text style={styles.date}>{formattedDate}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5,
    },
    containerMessage: {
        flex: 1,
        textAlign: "center",
        paddingVertical: 3,
        paddingHorizontal: 3,
        justifyContent: "center",
    },
    icon: {
       textAlignVertical: "center"
    },
    user: {
        fontSize: 16,
        fontWeight: "bold",
        justifyContent: "center",
        textAlign: "left",
    },
    lastMessage: {
    },
    date: {
        paddingRight: 16
    }
})