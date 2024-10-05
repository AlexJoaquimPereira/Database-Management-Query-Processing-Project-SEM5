import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SubmitButton from '../components/SubmitButton';
import Logo from '../components/logo';
import login from './login';
const Login = ({ navigation }) => {
    return (

        <View style={styles.container}>



            <Logo />
            <Text style={styles.title}>Welcome to Connectify!</Text>
            <Text style={styles.tagline}>
                Your{"\n"}
                <Text style={styles.bold}>Professional Networking Platform</Text>{"\n"}
                For{"\n"}
                <Text style={styles.bold}>Growth</Text>{"\n"}
                And{"\n"}
                <Text style={styles.bold}>Opportunities!</Text>
            </Text>

            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>

            {/* <Text style={{ color: '#A98CE6', fontWeight: 'bold' }}
                onPress={() => navigation.navigate('login')}>
                Log In
            </Text> */}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6E6FA',
    },
    logoContainer: {
        backgroundColor: '#ffffff',
        top: 100,
        width: 180,
        height: 180,
        borderColor: '#E5E5E5',
        borderWidth: 3,
        top: -120,
        borderRadius: 90,
        position: 'relative',
    },
    logo: {
        width: 120,
        height: 120,
        position: 'relative',
        alignSelf: 'center',
        top: 25,
    },
    title: {
        position: 'relative',
        top: -60,
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4B4B4D',
    },
    tagline: {
        fontSize: 20,
        textAlign: 'left',
        color: '#333',
        top: 10,
        marginVertical: 10,
    },
    bold: {
        fontWeight: '800',
        color: '#008080',
    },
    button: {
        backgroundColor: '#6A0B93',
        padding: 25,
        borderRadius: 25,
        paddingBottom: 15,
        top:85,
        paddingTop: 15,
    },
    
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold'
    }

});

export default Login;
