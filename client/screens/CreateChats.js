import React, { useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { User } from "../components/User";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';

export function CreateChats () {
    const [users, setUsers] = useState([
       { id: 1, name: "teste", email: "teste@email.com" },
       { id: 2, name: "teste", email: "teste2@email.com" },
       { id: 4, name: "teste", email: "teste4@email.com" }
    ]);

    function renderUser({ item }) {
        return (
            <User name={item.name} />
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.addButton}>
                <TouchableOpacity >
                    <EvilIcons style={styles.createGroupButton} name="plus" size={60} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList 
                renderItem={renderUser}
                keyExtractor={item => "" + item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({

  
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        // marginTop: StatusBar.currentHeight,
    },
    createGroupButton: {
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        marginBottom: 10
    },
    addButton: {
        position: "absolute",
        bottom: 10,
        right: 10
      },
})
