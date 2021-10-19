



import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "../screens/HomeScreen";
import { ChatScreen } from "../screens/ChatScreen";
import { CreateChats } from "../screens/CreateChats";
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { CalendarScreen } from "../screens/CalendarScreen";
import { Menu } from "../screens/Menu";
import { HeaderBackButton } from '@react-navigation/elements';
import { ProfileScreen } from "../screens/ProfileScreen";
import { ConfigScreen } from "../screens/ConfigScreen";
import { CallScreen } from "../screens/CallScreen";

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
            <Drawer.Screen name="Chamadas" component={CallScreen} />
            <Drawer.Screen name="Agenda" component={CalendarScreen} />
            <Drawer.Screen name="NovasConversas" component={CreateChats} />
            <Drawer.Screen name="Configurações" component={ConfigScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MenuScreen} options={{ headerShown: false }}/>
                <Stack.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={({ navigation, route }) => ({
                        headerLeft: () => <HeaderBackButton tintColor="black" onPress={() => navigation.push("Home")}/>
                    })}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Configurações" component={ConfigScreen}/>
                <Stack.Screen name="Call" component={CallScreen} />
                <Stack.Screen name="Calendar" component={CalendarScreen}/>
                <Stack.Screen name="Iniciar nova conversa" component={CreateChats} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}