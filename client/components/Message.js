import React from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";

export function Message({ name, message, date, self }) {
    const formattedDate = moment(date).format("HH:MM");

    return (
    <View style={[styles.container, self ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" }]}> 
        <View style={styles.top}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <View style={styles.messageComponents}>
            <Text style={styles.message}>{message}</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 6,
        paddingHorizontal: 8,
        justifyContent: "center",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "white"
    },
    top: {
        flexDirection: "row",
        alignContent: "space-between",
        justifyContent: "space-between",
        marginHorizontal: 5
    },
    name: {
        fontWeight: "bold",
        fontSize: 14,
        paddingBottom: 4,
        textAlign: "left",    
    },
    messageComponents: {
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10,
        width: '88%'
    },
    message: {
        fontSize: 16,
        paddingBottom: 4,
        paddingRight: 8,
    },
    date: {
        fontSize: 14,
        paddingBottom: 4,
        textAlign: "right",
        marginLeft: 5
    }
})