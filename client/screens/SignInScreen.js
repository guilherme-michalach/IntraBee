import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../components/Button";
import { ValidationInput } from "../components/ValidationInput";
import { MaterialIcons } from '@expo/vector-icons';
import colors from "../theme/colors";
import { handleEmailChange, handlePasswordChange } from "../utils/commonValidations";
import { useAuth } from "../contexts/AuthContext";
import { Loader } from "../components/Loader";
import { showErrorMessage } from "../utils/errorHandlers";

const initialState = {
    email: "",
    isEmailValid: false,    
    password: "",
    isPasswordValid: false,    
    isLoginValid: false,
    isLoading: false,       
}
