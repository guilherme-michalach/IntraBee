import React from "react";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Linking, View, Text, Touchable, StyleSheet, image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export function Menu({ navigation, ...rest}) {
    return (
      <DrawerContentScrollView style={styles.drawer}{...rest}>
        <View style={styles.container }>
        <FontAwesome style={styles.avatar} name="user-circle-o" size={50} color="black" />
            <View style={styles.userArea}>
            <Text style={styles.name}>Teste</Text>
            <Text style={styles.email}>teste@email.com</Text>
            </View>
       </View> 
       
       <DrawerItemList {...rest}>
           
       </DrawerItemList>
           
        <TouchableOpacity>
        
        </TouchableOpacity>
      </DrawerContentScrollView>
    );
  }


  const styles = StyleSheet.create({

    drawer:{
     backgroundColor:'rgb(192,192,192)'
    },
      container: {
          flex:1,
          backgroundColor:'rgb(255,250,205)',
          
   },
   avatar: {
       marginLeft: 20,
        marginTop: 20
   },
    
   
   userArea:{
       marginTop: 10,
       marginLeft: 20,
       marginBottom: 10
   },
   name:{
       marginTop: 5,
       fontSize:18,
       fontWeight: "bold"
   },
   email: {
       fontSize: 15
   }




   
  })
  