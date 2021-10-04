import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Routes } from './routes/index';


export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}