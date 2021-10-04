import React, { useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Chat } from "../components/Chat";
import colors from "../theme/colors";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from "../contexts/AuthContext";
import { EvilIcons } from '@expo/vector-icons';

export function HomeScreen () {
    const { authActions } = useAuth();

    const currentUser = { id: 1, name: "teste", email: "teste@email.com" };
    
    const [chats, setChats] = useState([
      [
        {
          "id": 2,
          "name": "Grupo 1",
          "users": [
            {
              "id": 1,
              "name": "teste",
              "email": "teste@email.com"
            }
          ],
          "lastMessage": null
        },
        {
          "id": 3,
          "name": "Grupo 2",
          "users": [
            {
              "id": 1,
              "name": "teste",
              "email": "teste@email.com"
            },
            {
              "id": 3,
              "name": "teste",
              "email": "teste20@email.com"
            }
          ],
          "lastMessage": null
        },
        {
          "id": 4,
          "name": "Grupo 2",
          "users": [
            {
              "id": 1,
              "name": "teste",
              "email": "teste@email.com"
            },
            {
              "id": 3,
              "name": "teste",
              "email": "teste20@email.com"
            },
            {
              "id": 5,
              "name": "teste",
              "email": "teste4@email.com"
            }
          ],
          "lastMessage": {
            "id": 7,
            "message": "Mensagem 2",
            "createdAt": "2021-09-30T20:17:23.293Z",
            "updatedAt": "2021-09-30T20:17:23.293Z",
            "chat_id": 4,
            "user_id": 5
          }
        },
        {
          "id": 5,
          "name": "Grupo 2",
          "users": [
            {
              "id": 1,
              "name": "teste",
              "email": "teste@email.com"
            },
            {
              "id": 5,
              "name": "teste",
              "email": "teste4@email.com"
            }
          ],
          "lastMessage": null
        },
        {
          "id": 6,
          "name": "Grupo 2",
          "users": [
            {
              "id": 1,
              "name": "teste",
              "email": "teste@email.com"
            },
            {
              "id": 5,
              "name": "teste",
              "email": "teste4@email.com"
            }
          ],
          "lastMessage": null
        }
      ]
    ]);

    function renderChat({ item }) {
        const chatName = item.name ? 
            item.name : 
            item.users[0].id === currentUser.id ? 
                item.users[1].name :
                item.users[0].name;

        return (
            <Chat 
                chatName={chatName}
                lastMessage={item.lastMessage.message} 
                date={item.lastMessage.createdAt}
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
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.addButton}>
                <EvilIcons name="plus" size={24} color="black" />
              </TouchableOpacity>
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
        flex:1
    },
    buttonContainer: {
      position: "absolute",
      bottom: 10,
      right: 10
    },
    addButton: {
      height: 60,
      width: 60,
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor,
    },

})