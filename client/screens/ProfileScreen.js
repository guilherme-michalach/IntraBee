import React, { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import colors from "../theme/colors";
import { EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { useAuth } from "../contexts/AuthContext";

export function ProfileScreen ({}) {
const { authActions } = useAuth();
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
  console.log(avatar);

    return (
        <View style={styles.container}>
            <View style={styles.icon}></View>
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
           
            

            <Text style={styles.title}>
                Perfil
            </Text>
            <Text style={styles.label}>
                Nome de Usuário
            </Text>
                <TextInput placeholder= "Nome do usuário" style={styles.input}/>
            <Text style={styles.label}>
                E-mail
            </Text> 
                <TextInput placeholder="E-mail do usuário" style={styles.input} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Editar informações
                </Text>
            </TouchableOpacity>
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
        flex: 1,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: "center"
    },
    label: {
        fontSize: 18,
        marginTop: 60,
        color: "black"
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
        marginTop: 125,
        marginBottom: 10
    },
    buttonText: {
        textAlign: "center",
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },
    title: {
        textAlign: "center",
        fontSize: 25,
    },
    visibleButton: {
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        height: 100,
        width: 100,
   
      }
});
