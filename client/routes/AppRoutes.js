import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "../screens/HomeScreen";
import { ChatScreen } from "../screens/ChatScreen";
import { CreateChats } from "../screens/CreateChats";
import { ChatTitle } from "../components/ChatTitle";
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { ProfileScreen } from "../screens/ProfileScreen";
import { CalendarScreen } from "../screens/CalendarScreen";
import { Menu } from "../screens/Menu";
import { api } from "../services/api";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function HomeMenuScreen() {
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
            drawerContent={props => <Menu {...props} />}
            defaultStatus="open"
        >
            <Drawer.Screen name="Conversas" component={HomeScreen} />
            <Drawer.Screen name="Perfil" component={ProfileScreen} />
            <Drawer.Screen name="Agenda" component={CalendarScreen} />            
            {/* <Drawer.Screen name="Sair" component={HomeScreen} options={() => authActions.signOut()} /> */}
            {/* <TouchableOpacity onPress={() => authActions.signOut()}>           */}
        </Drawer.Navigator>
    );
}

export function AppRoutes () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeMenuScreen} options={{ headerShown: false }} />
                <Stack.Screen 
                    name="Chat" 
                    component={ChatScreen} 
                    options={({ route }) => ({ headerTitle: props => <ChatTitle {...props} name={route.params?.name} /> })} 
                />
                {/* isConnected={route.params.isConnected} */}
                <Stack.Screen name="CreateChats" component={CreateChats} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}