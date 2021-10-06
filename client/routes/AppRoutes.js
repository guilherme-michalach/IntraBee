import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "../screens/HomeScreen";
import { ChatScreen } from "../screens/ChatScreen";
import { CreateChats } from "../screens/CreateChats";
import { ChatTitle } from "../components/ChatTitle";

const Stack = createNativeStackNavigator();

export function AppRoutes () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
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