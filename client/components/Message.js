import React from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";

export function Message({ name, message, date, self }) {
    const formattedDate = moment(date).format("HH:MM");

    return (
    <View style={[styles.container, self ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" }]}> 
        <View>
            <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.messageComponents}>
            <Text style={styles.message}>{message}</Text>
            <Text style={styles.date}>{formattedDate}</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 6,
        paddingHorizontal: 18,
        // alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "white"
    },
    name: {
        alignSelf: "flex-start",
        alignItems: "flex-start",
        alignContent: "flex-start",
        justifyContent: "flex-start",
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
        // alignSelf: "center",
        paddingRight: 8,
    },
    date: {
        fontSize: 12,
        textAlignVertical: "center"
        // alignSelf: "flex-end",
    }
})