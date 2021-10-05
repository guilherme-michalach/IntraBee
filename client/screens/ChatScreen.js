import React, { useRef, useState, useEffect } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Message } from "../components/Message";
import colors from "../theme/colors";
import { Feather } from '@expo/vector-icons';

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

        getMessages();
    }, []);

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