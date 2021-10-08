import React from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";

export function Message({ message, date, self }) {
    const formattedDate = moment(date).format("DD/MM/YYYY HH:MM:SS");

    return (
    <View style={[styles.container, self ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" }]}> 
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 6,
        paddingHorizontal: 18,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "white"
    },
    message: {
        fontSize: 16,
    },
    date: {
        fontSize: 12,
        alignSelf: "flex-end"
    }
})