import React from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";

export function Message({ message, date, self }) {
    const formattedDate = moment(date).format("DD/MM/YYYY HH:MM:SS");

    <View style={[styles.container, self ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" } ]}> 
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: "center",
        borderBottomColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        margin: 10
    },
    message: {
        fontSize: 16,
    },
    date: {
        fontSize: 12,
    }
})