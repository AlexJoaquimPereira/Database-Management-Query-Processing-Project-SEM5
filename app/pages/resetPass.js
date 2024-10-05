import React, { useState } from 'react';
import { Image, StyleSheet, View, Text ,TouchableOpacity} from "react-native";
import Button from '../components/SubmitButton';
import CfyTextInput from '../components/ConnectifyTextInput';
import { Link } from 'expo-router';
import Logo from '../components/logo';
import SubmitButton from '../components/SubmitButton';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleForgotPassword = () => {
    if (!email) {
      setAlertMessage('Please enter your email address');
      setModalVisible(true);
    } else if (!validateEmail(email)) {
      setAlertMessage('Please enter a valid email address');
      setModalVisible(true);
    } else {
      // Simulate sending email
      setAlertMessage('A password reset link has been sent to your email');
      setModalVisible(true);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  return (
    <View style={styles.background}>
      <Logo />
      <Text style={styles.text}>
        Enter your email address to reset your password
      </Text>
      <CfyTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
    </TouchableOpacity>
        <Text 
        onPress={()=>navigation.navigate("login")}
        style={styles.text1}
        >
            Back to Login
          </Text>

      {/* Use ConnectifyAlert */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  text: {
    
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
    marginBottom: 50,
  },
  text1:{
    fontFamily: 'Inter',
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
    fontWeight:'bold',
    marginBottom: 50,
    position:'absolute',
    bottom:60,
  },
  buttonArea: {
    paddingTop: 10,
    alignItems: 'center',
  },
  link: {
    color: '#A98CE6',
    fontWeight: 'bold',
  },
  button: {
        backgroundColor: '#6A0B93',
        padding: 25,
        borderRadius: 25,
        paddingBottom: 15,
        top:55,
        paddingTop: 15,
    },
    
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
});

export default ForgotPassword;