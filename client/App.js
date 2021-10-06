import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Routes } from './routes/index';
import { ChatScreen } from './screens/ChatScreen';
import { SignUpScreen } from "./screens/SignUpScreen";


export default function App() {
  return (    
   <AuthProvider>
     <Routes />
   </AuthProvider>
  );
}