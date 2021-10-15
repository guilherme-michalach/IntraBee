import React, { useState } from "react";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Linking, View, Text, Touchable, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from "../contexts/AuthContext";
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { useUser } from "../contexts/UserContext";

export function Menu({ navigation, ...rest }) {
  const { authActions } = useAuth();
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
    <DrawerContentScrollView style={styles.drawer}{...rest}>
      <View style={styles.container}>
        <View style={styles.image}>
        <TouchableOpacity onPress={openImagePicker}>
          {
            avatar ?
            <Image 
              source={{ uri: avatar }} 
              style={styles.avatar}
            /> :
            <FontAwesome style={styles.avatar} name="user-circle-o" size={70} color="black" />
          }
          
        </TouchableOpacity>
        </View>
        <View style={styles.userArea}>
          <Text style={styles.name}>Teste</Text>
          <Text style={styles.email}>teste@email.com</Text>
        </View>
      </View>
      <View style={styles.itens}>
        <DrawerItem icon={({ }) => <Entypo name="chat" size={24} color="black" />}
          label="Conversas" onPress={() => navigation.navigate('Conversas')} />
        <DrawerItem icon={() => <MaterialCommunityIcons name="face-profile" size={24} color="black" />}
          label="Perfil" onPress={() => navigation.navigate('Perfil')} />
        <DrawerItem icon={({ }) => <FontAwesome name="calendar" size={24} color="black" />}
          label="Agenda" onPress={() => navigation.navigate('Agenda')} />
        <DrawerItem icon={({ }) => <Entypo name="tools" size={24} color="black" />}
          label="Configurações" onPress={() => navigation.navigate('Configurações')} />
        <DrawerItem icon={({ }) => <Entypo name="log-out" size={24} color="black" />}
          label="Sair" onPress={() => authActions.signOut()} />
      </View>
    </DrawerContentScrollView>


  );
}


const styles = StyleSheet.create({
  drawer: {
    backgroundColor: 'rgb(255,250,205)'
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(192,192,192)',
  },
    userArea: {
    marginLeft: 20,
    marginBottom:15
  },
  name: {
    color: "black",
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold"
  },
  email: {
    color: "black",
    fontSize: 15
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius:35,
    // marginLeft: 20,
    marginTop:20,
    marginBottom:10
  },
  userArea: {
    alignItems: "center",
  },
  image: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center"
  },
})
