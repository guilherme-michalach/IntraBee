import React, { useRef, useState, useEffect } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { Message } from "../components/Message";
import colors from "../theme/colors";
import { Feather } from '@expo/vector-icons';
import { api } from "../services/api";
import { socket } from "../services/chat";

export function ChatScreen ({ navigation, route }) {
    const currentUser = route.params.currentUser;
    const flatRef = useRef();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function getMessages () {
            try {
                const messages = (await api.get(`/messages/${route.params?.chatId}`)).data;
                setMessages(messages);
            } catch (error) {
                console.log(error);
            }
        };

        socket.on("new message", newMessage => {
            if (newMessage.chat_id === route.params?.chatId) {
                setMessage(prevMessages => [...prevMessages, newMessage]);
            }
        });

        getMessages();

        return () => socket.off("new message");
    }, []);

    async function sendMessage () {
        if (!message) return;

        try {
            const newMessage = (await api.post("/messages", {
                message,
                chatId: route.params?.chatId
            })).data;

            socket.emit("send message", newMessage);
        } catch (error) {
            console.log(error);
        }

        setMessage("");
    }

    function renderMessage ({ item }) {
        const self = item.user_id === currentUser.id;

        return (
            <Message name={item.name} message={item.message} self={self} />
        );
    };
    
    return(
        <View style={styles.container}>
            <FlatList
                ref={flatRef}
                onLayout={() => flatRef.current.scrollToEnd()}
                onContentSizeChange={() => flatRef.current.scrollToEnd()}
                data={messages}
                renderItem={renderMessage}
                keyExtractor={item => "" + item.id}
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