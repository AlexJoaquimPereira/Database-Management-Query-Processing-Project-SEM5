import React, { useState } from 'react';
import { Image, StyleSheet, View, Text } from "react-native";
import CfyTextInput from '../components/ConnectifyTextInput';
import { Link } from 'expo-router';
import Logo from '../components/logo';
import Submitbtn from '../components/SubmitButton'
import WelcomePage from './Welcomepage';
import resetPass from './resetPass';
const LogIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.background}>
      
        
      <View style={styles.logoCont}>
      <Logo />
      </View>
      
      <View>
        <CfyTextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <CfyTextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.buttonArea1}>
          <Submitbtn 
            btntitle='Log In'
          />
        </View>
        <View style={styles.buttonArea2}>
          <Text style={styles.text}>Forgot your password?</Text>
          <Text onPress={()=>navigation.navigate("resetPass")}>
            Reset Password
          </Text>
          {/* <Link href="/forgotpass" style={{color: '#A98CE6', fontWeight: 'bold'}}>
            Reset Password
          </Link> */}
        </View>
        

        
        <View style={styles.buttonArea2}>
          <Text style={styles.text}>Do not have an account?
          <Text style={{color: '#A98CE6', fontWeight: 'bold'}}
          onPress={()=> navigation.navigate("signup")}>
            Sign Up
          </Text>
          </Text>
          
        </View>
        <Text style={styles.backbtn} onPress={()=>navigation.navigate("WelcomePage")}>Go Back</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonArea1: {
    paddingTop: 10,
    alignItems: 'center',
    position:'relative',
    top:-50
  },
  buttonArea2: {
    paddingTop: 10,
    alignItems: 'center',
    position:'relative',
    top:45

  },
  logoCont: {
    marginTop:80,
    marginBottom:-30
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  backbtn: {
    position:'absolute',
    top:-390,
    left:-40,
    fontWeight:'bold'

  },
});

export default LogIn;
