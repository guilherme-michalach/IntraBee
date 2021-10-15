import React, { useState, useEffect } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput,  TouchableOpacity, View } from "react-native";
import { Chat } from "../components/Chat";
import colors from "../theme/colors";
import { useAuth } from "../contexts/AuthContext";
import { EvilIcons } from '@expo/vector-icons';
import { api } from "../services/api";
import { socket } from "../services/chat";
import { Octicons } from '@expo/vector-icons';
import { DrawerActions } from "@react-navigation/native";
import { useUser } from "../contexts/UserContext";

 export function HomeScreen ({ navigation }) {
    const { authActions } = useAuth();
    // const [currentUser, setCurrentUser] = useState(null);
    const [chats, setChats] = useState([]);
    const { currentUser } = useUser();

    useEffect(() => {
      async function getChats() {
        try {
          const chats = (await api.get("/chats")).data;

          const chatsIds = chats.map(chat => chat.id);

          socket.emit("join chats", chatsIds);

          setChats(chats);
        } catch (error) {
          console.log(error);
        }
      }

      getChats();
    }, []);

    function renderChat({ item }) {
      const chatName = item.name ? 
        item.name : 
        item.users[0]?.id === currentUser?.id ? 
        item.users[1]?.name :
        item.users[0]?.name;

      return (
        <Chat 
            chatName={chatName}
            lastMessage={item.lastMessage?.message} 
            date={item.lastMessage?.createdAt}
            openChat={() => navigation.push("Chat", { chatId: item.id, currentUser, name: chatName })}
        />
      )
    }
    
    function handleChatCreation() {
      navigation.push("CreateChats")
    }
       
    return(
      <View style={styles.container}>
          <View style={styles.header}>
              <View style={styles.headerTitleContainer}>
                  <Text style={styles.headerTitle}>
                IntraBee
                  </Text>
                 </View> 
                <Text>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.openDrawer( 'DrawerNavigator')}>
                  <Octicons style={styles.options} name="three-bars" size={36} color="black" />
                  </TouchableOpacity>
                </Text>
          </View>
          <FlatList 
              data={chats}
              renderItem={renderChat}
              keyExtractor={item => "" + item.id}
              style={styles.chats}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={handleChatCreation}>
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
        paddingLeft: 35,
        paddingRight: 15,
        paddingVertical: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    chats: {
      paddingVertical: 2,
      paddingHorizontal: 3
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign:"left",
        letterSpacing: 2.5,
        // textShadowColor: 'rgba(0, 0, 0, 0.75)',
        // textShadowOffset: {width: 0.5, height: 0},
        // textShadowRadius: 15
    },
    headerTitleContainer: {
        flex:1,
    },
    buttonContainer: {
      position: "absolute",
      bottom: 10,
      right: 20
    },
    addButton: {
      height: 60,
      width: 60,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 0,
      marginBottom: 10
    },
    options:{
   
    }
})