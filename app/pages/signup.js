import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert } from "react-native";
import CfyTextInput from '../components/ConnectifyTextInput';
import { Link } from 'expo-router';
import SubmitButton from '../components/SubmitButton';
import Logo from '../components/logo';
import login from './login';
const SignUp = ({navigation}) => {
    //states
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [recheckPassword, setRecheckPassword] = useState('');


    //functions
    const handleSubmit = () => {
        try {
            if(!email || !username || !password || !recheckPassword) {
                Alert.alert("Please fill all the fields")
                return;
            }
            console.log("Registered data",{username,email,password,recheckPassword})
        }
        catch(error) {
            
            console.log(error)
        }
    }


    return (
        <View style={styles.background}>
            
            <View style={styles.logo}>
            <Logo />
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
                <View style={styles.cfy}>
                <SubmitButton
                    btntitle="Sign Up"
                    handleSubmit={handleSubmit}
                    
                />
                </View>
                



                <View style={styles.buttonArea}>
                <Text style={styles.text}>Already have an account?
          <Text style={{color: '#A98CE6', fontWeight: 'bold'}}
          onPress={()=> navigation.navigate("login")}>
            Login
          </Text>
          </Text>
                </View>
            </View>
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
        marginTop:100
    },
    
    text: {
        fontSize: 15,
        color: 'black',
    },
    
    logo: {
        width: 120,
        height: 120,
        position: 'relative',
        alignSelf: 'center',
        top: 45,
        left:-30,
        marginBottom:30
    },
    cfy:{
        marginTop:-50,
    }
});

export default SignUp;
