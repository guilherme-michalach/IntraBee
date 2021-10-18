import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View, Linking } from "react-native";
import colors from "../theme/colors";
import { api } from "../services/api";
import { Alert, Platform } from 'react-native';
import { CallUser } from "../components/CallUser";

export function CallScreen ({ navigation, route }) {
  const [users, setUsers] = useState([]);
  const [selectUser, selectedUsers] = useState([]);

  function renderUser({ item }) {
      return (
          <CallUser name={item.name} />
      )
  }

  useEffect(() => {
      async function getUsers () {
          try {
              const users = (await api.get(`/users/all`)).data;
              setUsers(users);     
          } catch (error) {
              console.log(error);
          }
      };
      getUsers();
  }, []);

  function callUser () {
    try {
      // const openURL
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <View style={styles.container}>
        <FlatList 
            renderItem={renderUser}
            keyExtractor={item => "" + item.id}
            data={users}
            onPress={callUser}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  callButton: {
    position: "absolute",
    bottom: 10,
    right: 10
  }
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