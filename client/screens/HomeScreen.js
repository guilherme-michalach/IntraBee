import React, { useState, useEffect } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Chat } from "../components/Chat";
import colors from "../theme/colors";
import { useAuth } from "../contexts/AuthContext";
import { EvilIcons } from '@expo/vector-icons';
import { api } from "../services/api";
import { socket } from "../services/chat";
import { Octicons } from '@expo/vector-icons';
import { useUser } from "../contexts/UserContext";

export function HomeScreen ({ navigation }) {
  const { currentUser } = useUser(); 
  const [chats, setChats] = useState([]);
  const [filteredChats, setFilteredChats] = useState([]);   
  const [search, setSearch] = useState("");

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

  const ItemSeparatorView = () => {
    return (
      <View style={styles.searchList} />
    )
  }
  
  const searchFilter = (text) => {
    let newInfo = [];
    if(text) {
      newInfo = chats.filter((item) => {                    
        const chatName = item.name ? 
          item.name : 
          item.users[0]?.id === currentUser?.id ? 
          item.users[1]?.name :
          item.users[0]?.name;
        
        return chatName.toLowerCase().includes(text.toLowerCase());
      })
      setFilteredChats(newInfo);       
    }
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

    setSearch(text);
  }

  function handleChatCreation() {
    navigation.push("Iniciar nova conversa")
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
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.openDrawer('DrawerNavigator')}>
                  <Octicons style={styles.options} name="three-bars" size={36} color="black" />
                </TouchableOpacity>
              </Text>
        </View>
        <TextInput 
          value={search}
          onChangeText={(text) => searchFilter(text)}            
          style={styles.searchBox}
          placeholder={"Busca de usuários"}
        />
        {
          filteredChats.length > 0 ?
          <FlatList 
            data={filteredChats}
            renderItem={renderChat}
            keyExtractor={(item, index)=> "" + item.id + index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            style={styles.chats}
          />  :
          <FlatList 
              data={chats}
              renderItem={renderChat}
              keyExtractor={(item, index)=> "" + item.id + index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              style={styles.chats}
          />
        }        
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
      paddingLeft: 15,
      paddingRight: 15,
      paddingVertical: 4,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
  },
  chats: {
    paddingVertical: 2,
  },
  headerTitle: {
      fontSize: 25,
      fontWeight: "bold",
      textAlign:"left",
      letterSpacing: 2.5,
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
  
  },
  searchBox: {
    marginVertical: 10,
    marginHorizontal: 20,
    // paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: colors.button,
    paddingStart: 10,
    paddingVertical: 0
  }
})