import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View, Linking, StatusBar, Text, TextInput } from "react-native";
import colors from "../theme/colors";
import { api } from "../services/api";
import { Alert, Platform } from 'react-native';
import { CallUser } from "../components/CallUser";
import { Octicons } from '@expo/vector-icons';
import { useUser } from "../contexts/UserContext";
import call from 'react-native-phone-call';

export function CallScreen ({ navigation, route }) {
  const { currentUser } = useUser(); 
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);   
  const [search, setSearch] = useState("");

  function renderUser({ item }) {
      return (
          <CallUser name={item.name} openCall={callUser(users)}/>
      )
  }
      
  const ItemSeparatorView = () => {
    return (
      <View style={styles.searchList} />
    )
  }
  
  const searchFilter = (text) => {
    let newInfo = [];
    if(text) {
      newInfo = users.filter((item) => {                    
        const userName = item.name ? 
          item.name : 
          item.users[0]?.id === currentUser?.id ? 
          item.users[1]?.name :
          item.users[0]?.name;
        
        return userName.toLowerCase().includes(text.toLowerCase());
      })
      setFilteredUsers(newInfo);       
    }
    async function getUsers () {
      try {
          const users = (await api.get(`/users/all`)).data;
          setUsers(users);   
      } catch (error) {
          console.log(error);
      }
    };
    getUsers();
    setSearch(text);
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
console.log(users)

  function callUser ({ item }) {
    console.log(item)
    try {
      const args = { 
        number: item.phone,
        prompt: false
      };
    
      call(args).catch(console.error)
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
      <TextInput 
          value={search}
          onChangeText={(text) => searchFilter(text)}            
          style={styles.searchBox}
          placeholder={"Busca de usuários"}
      />
        {
          filteredUsers.length > 0 ?
          <FlatList 
            data={filteredUsers}
            renderItem={renderUser}
            keyExtractor={(item, index)=> "" + item.id + index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            style={styles.chats}
          />  :
          <FlatList 
              data={users}
              renderItem={renderUser}
              keyExtractor={(item, index)=> "" + item.id + index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              style={styles.chats}
          />
        }        
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
  chats: {
    paddingVertical: 2,
  },
  searchBox: {
      marginVertical: 10,
      marginHorizontal: 20,
      borderBottomWidth: 1,
      borderColor: colors.button,
      paddingStart: 10,
      paddingVertical: 0
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