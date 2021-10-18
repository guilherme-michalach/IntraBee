import React, { useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Todo } from "../components/Todo";
import { useTodo } from "../contexts/TodoContext";
import { AddUpdateTodo } from "./AddUpdateTodoScreen";
import colors from "../theme/colors";
import { api } from "../services/api";
import { Octicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export function CalendarScreen({ navigation }) {
    const { todos } = useTodo().state;    
    const [showModal, setShowModal] = useState(false);
    const [currentTodo, setCurrentTodo] = useState(null);    

    function showUpdateModal(todo) {             
        setCurrentTodo(todo);
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
        setCurrentTodo(null);
    }

    return (
        <View style={styles.container}>
            { showModal &&
                <AddUpdateTodo 
                    visible={true}                
                    closeModal={closeModal}
                    todo={currentTodo}
                /> 
            }
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
            <View style={styles.todoList}>                                    
                <FlatList 
                    ListEmptyComponent={<Text style={styles.emptyListText}>Você não possui nenhuma tarefa</Text>}             
                    data={todos}
                    renderItem={({ item }) => (
                        <Todo 
                            {...item}                                  
                            editTodo={() => showUpdateModal({...item})}                      
                        />
                    )}
                    keyExtractor={item => item.id}
                />                           
            </View>
            <TouchableOpacity style={styles.addButtons} onPress={() => setShowModal(true)} >
                <EvilIcons name="plus" size={66} color="black" />
            </TouchableOpacity>
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
    headerTitle: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign:"left",
        letterSpacing: 2.5,
    },
    headerTitleContainer: {
        flex: 1,
    },
    buttonContainer: {
      position: "absolute",
      bottom: 10,
      right: 20
    },
    addButtons: {
        position: "absolute",
        bottom: 30,
        right: 20,
    },
    addButton: {
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 0,
        marginBottom: 10
    },
    todoList: {
        flex: 1,                
        backgroundColor: colors.backgroundColor,
        marginBottom: 80,
        marginTop: 30                
    },
    emptyListText: {
        fontSize: 18,
        textAlign: "center"        
    },
});