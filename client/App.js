import React from 'react';
// import { AuthRoutes } from './routes/AuthRoutes';
// import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from './contexts/AuthContext';
import { Router } from './routes/Router';
// import { SignInScreen } from './screens/SignInScreen';
// import { Text, View } from 'react-native';

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

