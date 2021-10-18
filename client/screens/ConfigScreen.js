import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Switch, Modal, Pressable } from 'react-native';
import colors from '../theme/colors';

export function ConfigScreen({ navigation, route }) {
    const currentUser = route.params?.currentUser;
    console.log(currentUser)
    const [modalVisible, setModalVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [isEnabled, setIsEnabled] = useState(true);

    return (
        <View style={styles.container}>
            <View>
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
            </View>
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
            {/* <View style={styles.darkModeContainer}>
                <Text style={styles.text}>
                    Darkmode
                </Text>
                <Switch
                    trackColor={{ false: "black", true:'rgb(192,192,192)' }}
                    thumbColor={isEnabled ? "black" : 'rgb(192,192,192)'}
                    onValueChange={setIsEnabled}
                    value={isEnabled}
                />
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {  
        flex: 1,
        paddingHorizontal:30,
        backgroundColor: colors.backgroundColor,
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        padding: 10,
        marginTop: 25,
        borderRadius: 12,
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