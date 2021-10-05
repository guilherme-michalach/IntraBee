import React, { useState, useEffect } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Chat } from "../components/Chat";
import colors from "../theme/colors";
import { useAuth } from "../contexts/AuthContext";
import { EvilIcons } from '@expo/vector-icons';

export function HomeScreen ({ navigation }) {
    const { authActions } = useAuth();

    const [currentUser, setCurrentUser] = useState(null);

    const [chats, setChats] = useState([]);

    useEffect(() => {
      async function getUser() {
        try {
          const user = (await api.get("/users/me")).data;

          setCurrentUser(user);
        } catch (error) {
          if (error.response.status === 401) {
            authActions.signOut();
          }
        }
      }

      async function getChats() {
        try {
          const chat = (await api.get("/chats")).data;

          setChats(chat);
        } catch (error) {
          console.log(error);
        }
      }

      getUser();
      getChats();
    }, []);

    function renderChat({ item }) {
        const chatName = item.name ? 
            item.name : 
            item.users[0]?.id === currentUser?.id ? 
            item.users[1]?.name :
            item.user[0]?.name;

        return (
            <Chat 
                chatName={chatName}
                lastMessage={item.lastMessage.message} 
                date={item.lastMessage.createdAt}
                openChat={() => navigation.push("Chat", { chatId: item.id, currentUser })}
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
                <TouchableOpacity onPress={() => authActions.signOut()}><Text>Logoff</Text></TouchableOpacity>
            </View>
            <FlatList 
                data={chats}
                renderItem={renderChat}
                keyExtractor={item => "" + item.id}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.addButton}>
                <EvilIcons name="plus" size={66} color="black" />
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
      marginRight: 10,
      marginBottom: 10
      // backgroundColor,
    },

})