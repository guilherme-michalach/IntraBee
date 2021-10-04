import React, { useRef, useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Message } from "../components/Message";
import colors from "../theme/colors";
import { Feather } from '@expo/vector-icons';

export function ChatScreen () {
    const currentUser = { id: 1, name: "teste", email: "teste@email.com" };

    const flatRef = useRef();

    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
            {
              "id": 6,
              "message": "Mensagem 1",
              "userId": 5,
              "name": "teste",
              "createdAt": "2021-09-30T20:11:51.456Z"
            },
            {
              "id": 7,
              "message": "Mensagem 2",
              "userId": 5,
              "name": "teste",
              "createdAt": "2021-09-30T20:17:23.293Z"
            },
            {
              "id": 8,
              "message": "Mensagem teste",
              "userId": 1,
              "name": "teste",
              "createdAt": "2021-10-04T19:33:46.436Z"
            }
    ]);

    function sendMessage () {
        if (!message) return;

        setMessages(prevMessages => [...prevMessages, message]);

        setMessage("");
    }

    function renderMessage ({ item }) {
        const self = item.user_id === currentUser.id;

        return (
            <Message name={item.name} message={item.message} self={self} />
        )
    }
    
    return(
        <View style={styles.container}>
            <FlatList
                ref={flatRef}
                onLayout={() => flatRef.current.scrollToEnd()}
                data={messages}
                renderItem={renderMessage}
                keyExtractor={item => "" + item_id}
            />
            <View style={styles.containerInput}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Digite sua mensagem" 
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity style={styles.send} onPress={sendMessage}>
                    <Feather name="send" size={24} color="black" />
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
    containerInput: {
        flexDirection: "row",
        backgroundColor: "grey"
    },
    input: {
        paddingLeft: 10,
        flex: 1,
        fontSize: 22
    },
    send: {
        width: 44,
        height: 44,
        justifyContent: "center",
        alignItems: "center"
    }
})