import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import colors from "../theme/colors";

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >
                IntraBee
            </Text>
            <ActivityIndicator size="large" color={"black"} style={styles.circle} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    title: {
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 30,
        fontFamily: "monospace",
        flex: 1
    },
    circle: {
        flex: 1
    }
});