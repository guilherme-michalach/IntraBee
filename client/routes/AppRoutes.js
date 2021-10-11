import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "../screens/HomeScreen";
import { ChatScreen } from "../screens/ChatScreen";
import { CreateChats } from "../screens/CreateChats";
import { ChatTitle } from "../components/ChatTitle";
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { CalendarScreen } from "../screens/CalendarScreen";
import { Menu } from "../screens/Menu";
import { api } from "../services/api";
import { HeaderBackButton } from '@react-navigation/elements';
import { ProfileScreen } from "../screens/ProfileScreen";

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
                    options={({ navigation, route }) => ({
                    headerLeft: () => <HeaderBackButton tintColor="black" onPress={() => navigation.push("Home")} />
                    })} 
                />
                {/* <Stack.Screen 
                    name="Config"
                    component = {ConfigScreen}
                /> */}
                <Stack.Screen name="CreateChats" component={CreateChats} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}