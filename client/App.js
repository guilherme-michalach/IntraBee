import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SignInScreen } from './screens/SignInScreen';
import { AuthRoutes } from './routes/AuthRoutes';
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from './contexts/AuthContext';
import { Router } from './routes/Router';

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

