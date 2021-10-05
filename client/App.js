import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Routes } from './routes/index';
import { ChatScreen } from './screens/ChatScreen';
import { HomeScreen } from './screens/HomeScreen';


export default function App() {
  return (
/* <ChatScreen /> */
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}