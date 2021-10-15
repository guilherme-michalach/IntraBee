import React, { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../services/api";

export function ProfileScreen ({ navigation, route }) {
    const { authActions } = useAuth();
     const currentUser = route.params?.currentUser;
     console.log(currentUser)
    console.log(route)
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
             <Text style={styles.title}>
                Perfil
            </Text>
            <Text style={styles.label}>
                Nome de Usuário
            </Text>
            {/* <Text >{currentUser.name}</Text> */}
            <Text style={styles.label}>
                E-mail
            </Text> 
            {/* <Text >{currentUser.email}</Text> */}
            <Text style={styles.label}>
                Telefone
            </Text> 
            {/* <Text >{currentUser.phone}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.backgroundColor,
        padding: 40
    },
    icon: {
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: "center",
    },
    label: {
        fontSize: 18,
        marginTop: 60,
        textAlign: "center",
        color: "black",
        // fontWeight: "bold",
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
      }
});
