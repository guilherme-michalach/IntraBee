import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { handleEmailChange, handlePasswordChange } from "../utils/commonValidations";
import { useAuth } from "../contexts/AuthContext";
import { showErrorMessage } from "../utils/errorHandlers";

const initialState = {
    email: "",
    isEmailValid: false,    
    password: "",
    isPasswordValid: false,    
    isLoginValid: false,
    isLoading: false,       
}

export default function SignInScreen () {}

const styles = StyleSheet.create({
    
})