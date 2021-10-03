import React, { useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Message } from "../components/Message";
import colors from "../theme/colors";

export function HomeScreen () {
    const [messages, setMessages] = useState([])

    function renderMessage({ item }) {
        return (
            <Message name={item.name} />
        )
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}>
                        IntraBee
                    </Text>

                </View>
                <Text>Drawer</Text>
                {/* <TouchableOpacity></TouchableOpacity> */}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        marginTop: StatusBar.currentHeight,
    },
    header: {
        backgroundColor: colors.header,
        padding: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    headerTitle: {
        // backgroundColor:,
        fontSize: 24,
        fontWeight: "bold",

    },
    headerTitleContainer: {
        flex: 1
    }
})