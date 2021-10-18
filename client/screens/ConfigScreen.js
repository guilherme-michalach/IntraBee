import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, StatusBar, View, Alert, Switch, Modal, Pressable } from 'react-native';
import colors from '../theme/colors';
import { Octicons } from '@expo/vector-icons';

export function ConfigScreen({ navigation, route }) {
    const currentUser = route.params?.currentUser;
    console.log(currentUser)
    const [modalVisible, setModalVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [isEnabled, setIsEnabled] = useState(true);

    return (
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
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Darkmode
                    </Text>
                </TouchableOpacity>
                <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible) }} >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.titleModal}>Mudar a senha</Text>
                                <TextInput
                                    style={styles.modalText}
                                    placeholder="Digite a sua senha nova"
                                    value={password}
                                    onChangeText={setPassword} >
                                </TextInput>
                                <View style={styles.viewButton}>
                                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Fechar</Text>
                                    </Pressable>
                                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Enviar</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                </Modal>
                <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>
                        Mudar senha
                    </Text>
                </Pressable>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Privacidade
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Ajuda
                </Text>
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
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        padding: 12,
        marginTop: 25,
        marginHorizontal: 30,
        borderRadius: 28,
        backgroundColor: colors.secundary
    },
    buttonOpen: {
        backgroundColor: colors.secundary
    },
    buttonClose: {
        backgroundColor: colors.secundary,
        margin: 20
    },
    buttonText: {
        fontSize: 20,
        color: colors.primary,
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginHorizontal: 10
    },
    viewButton: {
        flexWrap: "wrap",
        flexDirection: "row",
        margin: -20,
    },
    titleModal: {
        marginTop: -25,
        marginBottom: 10,
        fontSize: 18
    },
    modalText: {
        marginBottom: 10,
        textAlign: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
    },
    modalView: {
        margin: 30,
        padding: 60,
        elevation: 5,
        shadowRadius: 4,
        borderRadius: 20,
        shadowColor: "#000",
        alignItems: "center",
        backgroundColor: colors.secundary,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
    },
    darkModeContainer: {
        flexDirection: "row",
        padding: 20,
        justifyContent: "center",
    }
})