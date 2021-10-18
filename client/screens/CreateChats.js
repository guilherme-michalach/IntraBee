import React, { useState, useEffect } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { User } from "../components/User";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';
import { api } from "../services/api";
import { useUser } from "../contexts/UserContext";

export function CreateChats ({ navigation }) {
    const { currentUser } = useUser();
    const currentUserId = currentUser.id;

    const [users, setUsers] = useState([]);
    const [selectUser, selectedUsers] = useState([]);

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

    async function createChat () {
        selectUser(users)

        try {
            const chat = (await api.post(`/chats`, {
                name: "",
                users: [currentUserId, selectUser]
            })).data;

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.addButton}>
                <TouchableOpacity onPress={createChat}>
                    <EvilIcons style={styles.createGroupButton} name="plus" size={66} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList 
                renderItem={renderUser}
                keyExtractor={item => "" + item.id}
                data={users}
                onPress={selectUser}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
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
