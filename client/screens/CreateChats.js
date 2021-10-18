import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { User } from "../components/User";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';
import { api } from "../services/api";
import { useUser } from "../contexts/UserContext";

export function CreateChats ({ navigation }) {
    const { currentUser } = useUser();
    const currentUserId = currentUser.id;

    const [users, setUsers] = useState([]);
    const [selectUser, selectedUser] = useState([]);
    const [selectedUsers, seSelectedUsers] = useState([]);

    // Criar uma função que verifica se o usuário ja esta no vetor selectedUsers

    function renderUser({ item }) {
        return (
            <User name={item.name} onPress={() => createChat([item.id])}  />
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
    }, []);

    async function createChat([users]) {
        try {
            const chat = (await api.post(`/chats`, {
                name: "",
                users: [currentUserId, ...users]
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
            />
            {
                selectedUsers.length > 0 &&
                <TouchableOpacity onPress={() => createChat(selectedUsers)}>
                    <Text>Criar grupo</Text>
                </TouchableOpacity>
            }
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
