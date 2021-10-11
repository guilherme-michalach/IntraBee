import React from "react";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Linking, View, Text, Touchable, StyleSheet, image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from "../contexts/AuthContext";
import { Entypo } from '@expo/vector-icons'; 
import { Button } from 'react-native-paper';





export function Menu({ navigation, ...rest }) {
  const { authActions } = useAuth();
  

  return (
    <DrawerContentScrollView style={styles.drawer}{...rest}>
      <View style={styles.container}>
        <FontAwesome style={styles.avatar} name="user-circle-o" size={50} color="black" />
        <View style={styles.userArea}>
          <Text style={styles.name}>Teste</Text>
          <Text style={styles.email}>teste@email.com</Text>
        </View>
      </View>
      
      <DrawerItem icon={({}) =><Entypo name="chat" size={24} color="blue" />}
      label ="Conversas" onPress={() => navigation.navigate('Conversas')}/>

      <DrawerItem icon={({}) => <MaterialCommunityIcons name="face-profile" size={24} color="blue" />}
      label ="Perfil" onPress={() => navigation.navigate('Perfil')}/>

      <DrawerItem icon={({}) =><FontAwesome name="calendar" size={24} color="black" />}
       label ="Agenda" onPress={() => navigation.navigate('Agenda')}/>
       
      <DrawerItem icon={({}) =><Entypo name="log-out" size={24} color="black" />}
      label="Sair" onPress={() => authActions.signOut()} />
    
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
  avatar: {
    marginLeft: 20,
    marginTop: 20
  },


  userArea: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10
  },
  name: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold"
  },
  email: {
    fontSize: 15
  }





})
