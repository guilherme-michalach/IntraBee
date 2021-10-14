import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "../screens/HomeScreen";
import { ChatScreen } from "../screens/ChatScreen";
import { CreateChats } from "../screens/CreateChats";
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { CalendarScreen } from "../screens/CalendarScreen";
import { Menu } from "../screens/Menu";
import { api } from "../services/api";
import { HeaderBackButton } from '@react-navigation/elements';
import { ProfileScreen } from "../screens/ProfileScreen";
import { ConfigScreen } from "../screens/ConfigScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function MenuScreen() {
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
            drawerContent={props => <Menu {...props} />}
            defaultStatus="closed"
        >
            <Drawer.Screen name="Conversas" component={HomeScreen} />
            <Drawer.Screen name="Perfil" component={ProfileScreen} />
            <Drawer.Screen name="Agenda" component={CalendarScreen} />  
            <Drawer.Screen name="Configurações" component={ConfigScreen} options={{ headerShown: true }}/>          
        </Drawer.Navigator>
    );
}

export function AppRoutes () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MenuScreen} options={{ headerShown: false }} />
                <Stack.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={({ navigation, route }) => ({
                    headerLeft: () => <HeaderBackButton tintColor="black" onPress={() => navigation.push("Home")} />
                    })} 
                />
                <Stack.Screen name="Perfil" component={ProfileScreen}/>
                <Stack.Screen 
                    name="Config"
                    component = {ConfigScreen}
                    options={{ headerShown: true }}
                />
                <Stack.Screen name="CreateChats" component={CreateChats} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}