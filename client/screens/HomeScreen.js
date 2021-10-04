import React, { useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Chat } from "../components/Chat";
import colors from "../theme/colors";
import { useAuth } from "../contexts/AuthContext";

export function HomeScreen () {
    const { authActions } = useAuth();

    const currentUser = { id: 1, name: "teste", email: "teste@email.com" }
    
    const [chats, setChats] = useState([
        [
            {
              "id": 4,
              "name": "Grupo 2",
              "users": [
                {
                  "name": "teste",
                  "email": "teste@email.com"
                },
                {
                  "name": "teste",
                  "email": "teste20@email.com"
                },
                {
                  "name": "teste",
                  "email": "teste4@email.com"
                }
              ]
            },
            {
              "id": 5,
              "name": "Grupo 2",
              "users": [
                {
                  "name": "teste",
                  "email": "teste@email.com"
                },
                {
                  "name": "teste",
                  "email": "teste4@email.com"
                }
              ]
            },
            {
              "id": 6,
              "name": "Grupo 2",
              "users": [
                {
                  "name": "teste",
                  "email": "teste@email.com"
                },
                {
                  "name": "teste",
                  "email": "teste4@email.com"
                }
              ]
            }
          ]
    ]);

    function renderChat({ item }) {
        // const chatName = item.name ? 
        //     item.name : 
        //     item.users[0].id === currentUser.id ? 
        //         item.users[1].name :
        //         item.users[0].name;

        return (
            <Chat 
                // chatName={chatName}
                // lastMessage={item.lastMessage.message} 
                // date={item.lastMessage.createdAt}
            />
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
            <FlatList 
                data={chats}
                renderItem={renderChat}
                keyExtractor={item => "" + item.id}
            />
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