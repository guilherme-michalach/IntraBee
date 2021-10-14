import React, { useState, useEffect } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { User } from "../components/User";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';
import { api } from "../services/api";

export function CreateChats ({ navigation }) {
    const [users, setUsers] = useState([]);

    function renderUser({ item }) {
        return (
            <User name={item.name} />
        )
    }

    useEffect(() => {
        async function getUsers () {
            try {
                const users = (await api.get(`/users/all`)).data;
                setUsers(users);
            } catch (error) {
                console.log(error);
            }
        };

        getUsers();
    });

    return(
        <View style={styles.container}>
            <View style={styles.addButton}>
                <TouchableOpacity >
                    <EvilIcons style={styles.createGroupButton} name="plus" size={66} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList 
                renderItem={renderUser}
                keyExtractor={item => "" + item.id}
                data={users}
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
