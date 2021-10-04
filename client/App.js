import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Routes } from './';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}