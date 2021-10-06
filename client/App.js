import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Routes } from './routes/index';
import { ChatScreen } from './screens/ChatScreen';
import SignInScreen from "./screens/SignInScreen";


export default function App() {
  return (    
  //  <SignInScreen />
   <AuthProvider>
     <Routes />
   </AuthProvider>

  );
}