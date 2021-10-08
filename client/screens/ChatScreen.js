import React, { useRef, useState, useEffect } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { Message } from "../components/Message";
import colors from "../theme/colors";
// import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { api } from "../services/api";
import { socket } from "../services/chat";

export function ChatScreen ({ navigation, route }) {
    const currentUser = route.params?.currentUser;
    // ver com e sem interrogação o params
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

    useEffect(() => {
        console.log(messages);
    }, [messages]);

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
        const self = item.userId === currentUser.id;

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
                <View style={styles.inputOption}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Digite sua mensagem"
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity style={styles.micInput}> 
                    <Ionicons name="mic" size={30} color="black" />
                </TouchableOpacity>
                </View>    
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.send}>
                        <AntDesign name="paperclip" size={30} color="black" style={styles.clip} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.send} onPress={sendMessage}>
                        {/* <Feather name="send" size={24} color="black" /> */}
                        <AntDesign name="rightcircleo" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        // marginTop: StatusBar.currentHeight,
    },
    containerInput: {
        flexDirection: "row",
        paddingTop: 3,
        alignItems: "center",
        marginBottom: 6,
    },
    buttons: {
        flexDirection: "row",
        borderRadius: 44,
        backgroundColor: "white",
        padding: 2, 
        marginRight: 6
    },
    inputOption: {
        flex: 1,
        flexDirection: "row",
        height: 38,
        paddingLeft: 10,
        flex: 1,
        fontSize: 22,
        backgroundColor: "white",
        borderRadius: 44,
        padding: 2,
        marginHorizontal: 6    
    },
    input: {
        height: 38,
        paddingLeft: 10,
        flex: 1,
        fontSize: 18,
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: 44,
        padding: 2,
        marginHorizontal: 6
    },
    micInput: {
        marginRight: 4
    },
    send: {
        height: 38,
        marginRight: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 4
    },
    clip: {
        marginRight: 8
    }
})