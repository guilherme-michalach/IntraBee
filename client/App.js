import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Routes } from './routes/index'
import { CalendarScreen } from './screens/CalendarScreen';

export default function App() {
  return (  
    <CalendarScreen></CalendarScreen>
  //  <AuthProvider>
  //    <Routes />
  //  </AuthProvider>
  );
}