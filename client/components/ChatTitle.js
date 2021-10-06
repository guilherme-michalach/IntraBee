import React from "react";
import { Text } from "react-native";

export function ChatTitle ({ name, isConnected }) {
    return (
        <>
            <Text>{name}</Text>
            {/* {
                isConnected &&
                <View style={styles.connected}>Online</View>
            } */}
        </>
    );
}