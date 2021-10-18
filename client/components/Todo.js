import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox, IconButton } from "react-native-paper";
import moment from 'moment';
import 'moment/locale/pt-br';
import { FontAwesome } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import { useTodo } from "../contexts/TodoContext";
import colors from "../theme/colors";

export function Todo(props) {    
    const checkboxStatus = props.completedAt ? "checked" : "unchecked";
    const { todoActions } = useTodo();
    
    const date = props.completedAt ? props.completedAt : props.expirationDate;
    const formattedDate = moment(date).format('D [de] MMMM - HH:mm');    

    function getLeftContent() {
        return (
            <View style={styles.left}>
                <FontAwesome name="trash" size={20} color="#FFF" style={styles.excludeIcon} />                
                <Text style={styles.excludeText}>Excluir</Text>
            </View>
        )
    }

    async function handleToggleTodo() {
        try {
            await todoActions.toggleTodo(props.id);            
        } catch(err) {
            console.log(err);
        }
    }

    async function handleDeleteTodo() {
        try {
            await todoActions.removeTodo(props.id);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Swipeable             
            renderLeftActions={getLeftContent}            
            onSwipeableLeftOpen={handleDeleteTodo}>
            <View style={styles.item}>
                <Checkbox.Android status={checkboxStatus} onPress={handleToggleTodo} />
                <View>
                    <Text style={styles.title}>{props.task}</Text>
                    <Text style={styles.description}>{formattedDate}</Text>
                </View>
                <IconButton 
                    icon="pencil"
                    style={styles.editButton}
                    color={colors.secundary}
                    onPress={props.editTodo}
                />
            </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.header,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    },  
    editButton: {
        backgroundColor: colors.backgroundColor,        
    },
    left: {
        flex: 1,
        backgroundColor: colors.error,
        flexDirection: 'row',
        alignItems: 'center'
    },
    excludeIcon: {
        marginLeft: 10,
        color: colors.backgroundColor
    },
    excludeText: {
        color: '#FFF',
        fontSize: 20,
        margin: 10
    }
});