import React, { useState } from 'react';
import { Image, StyleSheet, View, Text } from "react-native";
import Button from "../components/ConnectifyButton";
import CfyTextInput from '../components/ConnectifyTextInput';
import ConnectifyAlert from '../components/ConnectifyAlert';
import { Link } from "expo-router";
import axios from 'axios'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [recheckPassword, setRecheckPassword] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSignUp = () => {
    if (!email) {
      setAlertMessage('Please enter your email address');
      setModalVisible(true);
    } else if (!validateEmail(email)) {
      setAlertMessage('Please enter a valid email address');
      setModalVisible(true);
    } else if (!username) {
      setAlertMessage('Please enter a username');
      setModalVisible(true);
    } else if (password.length <= 8){
      setAlertMessage('Create a password longer than 8 characters');
      setModalVisible(true);
    } else if (!password || !recheckPassword) {
      setAlertMessage('Please enter your password');
      setModalVisible(true);
    } else if (password !== recheckPassword) {
      setAlertMessage('Passwords do not match');
      setModalVisible(true);
    } else {
      // Simulate sending the form details
      setAlertMessage('Sign up successful!');
      setModalVisible(true);
      // Here, you can add your API call to sign up the user
      const userData ={
        username, 
        email,
        password,
      };
      axios
        .post("https://localhost:3000/api/auth/signup", userData)
        .then(res => console.log(res.data))
        .catch(e => console.log(e))
    }
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/images/connectify-logo.png")} style={{ width: 120, height: 120 }} />
      </View>
      <View>
        <CfyTextInput
          placeholder="Set email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <CfyTextInput
          placeholder="Set username"
          value={username}
          onChangeText={setUsername}
        />
        <CfyTextInput
          placeholder="Set password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <CfyTextInput
          placeholder="Re-enter password"
          value={recheckPassword}
          onChangeText={setRecheckPassword}
          secureTextEntry
        />
        <View style={styles.buttonArea}>
          <Button backgroundColor='#A98CE6' textColor='white' onPress={handleSignUp}>
            Sign Up
          </Button>
        </View>
        <View style={styles.buttonArea}>
          <Text style={styles.text}>Already have an account?</Text>
          <Link href='/login' style={{ color: '#A98CE6', fontWeight: 'bold' }}>
            Login
          </Link>
        </View>
      </View>
      {/* Use ConnectifyAlert */}
      <ConnectifyAlert 
        visible={modalVisible} 
        message={alertMessage} 
        onClose={() => setModalVisible(false)} 
      />
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
  buttonArea: {
    paddingTop: 10,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default SignUp;
