import React, { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, StatusBar } from "react-native";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { useUser } from "../contexts/UserContext";
import { Octicons } from '@expo/vector-icons';

export function ProfileScreen ({ navigation, route }) {
    const { currentUser } = useUser();
    const [ avatar, setAvatar ] = useState(null);

    async function openImagePicker() {
        const permissionsResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionsResult.granted === false) {
            alert("É necessário conceder a permissão de acesso a galeria");
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: "Images",
            aspect: [4, 3],
            quality: 1
        });    

    setAvatar(pickerResult.uri);
    }
  

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
            <View style={styles.icon}>
            <TouchableOpacity onPress={openImagePicker}>
        {
            avatar ?
            <Image 
                source={{ uri: avatar }} 
                style={styles.avatar}
            /> :
            <EvilIcons name="user" size={250} color="black" />
        }
          </TouchableOpacity>
          </View>       
             <Text style={styles.title}>{currentUser.name}</Text>
            <Text style={styles.label}>
                E-mail:
            </Text> 
            <Text style={styles.info}>{currentUser.email}</Text>
            <Text style={styles.label}>
                Telefone:
            </Text> 
            <Text style={styles.info}>{currentUser.phone}</Text>
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
        flex:1,
    },
    addButton: {
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 0,
        marginBottom: 10
    },
    icon: {
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: "center",
    },
    label: {
        fontSize: 18,
        marginTop: 70,
        textAlign: "center",
        color: "black",
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
    },
    button: {
        backgroundColor:  'rgb(192, 192, 192)',
        borderRadius: 12,
        padding: 15,
        marginTop: 110,
        marginBottom: 40
    },
    buttonText: {
        textAlign: "center",
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },
    title: {
        textAlign: "center",
        fontSize: 28,
    },
    visibleButton: {
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius:100,
        textAlign:"center",
        marginTop:80
    },
    info: {
        textAlign: "center",
        justifyContent: 'center',
        alignItems: "center",
        color: "black",
        fontSize: 18,
        marginTop: 10
    }
});
