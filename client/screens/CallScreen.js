import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View, Linking, StatusBar, Text } from "react-native";
import colors from "../theme/colors";
import { api } from "../services/api";
import { Alert, Platform } from 'react-native';
import { CallUser } from "../components/CallUser";
import { Octicons } from '@expo/vector-icons';
import { useUser } from "../contexts/UserContext";

export function CallScreen ({ navigation, route }) {
  const { currentUser } = useUser(); 
  const [users, setUsers] = useState([]);

  function renderUser({ item }) {
      return (
          <CallUser name={item.name} openCall={callUser}/>
      )
  }

  useEffect(() => {
      async function getUsers () {
          try {
              const users = (await api.get(`/users/all`)).data;
              setUsers(users);   
              
              // for (userIndex of users) {
              //   if (users[userIndex].id !== currentUser.id) {
              //     setUsers(users);   
              //   }
              // }

          } catch (error) {
              console.log(error);
          }
      };
      getUsers();
  }, []);

  function callUser () {
    try {
      // const openURL
      console.log("error");
    } catch (error) {
      console.log(error);
    }
  }

  return(
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
        <FlatList 
            renderItem={renderUser}
            keyExtractor={item => "" + item.id}
            data={users}
        />
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
  options:{
  },

})

// export const callNumber = phone => {
// console.log('callNumber ----> ', phone);
// let phoneNumber = phone;
// if (Platform.OS !== 'Android') {
// phoneNumber = `telprompt:${phone}`;
// }
// else  {
// phoneNumber = `tel:${phone}`;
// }
// Linking.canOpenURL(phoneNumber)
// .then(supported => {
// if (!supported) {
//     Alert.alert('Phone number is not available');
//   } else {
//     return Linking.openURL(phoneNumber);
// }
// })
// .catch(err => console.log(err));
// };