import React from 'react';
import { Image, StyleSheet, View, Text } from "react-native";
import Button from "@/components/ConnectifyButton"

export default function Index({navigation}) {
  return (
    //<SafeAreaView>
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require("@/assets/images/connectify-logo.png")} style={{width: 120, height: 120}}/>
        <Text style={styles.text}>ConnectiFy</Text>
      </View>
      <View style={styles.buttonArea}>
        <Button backgroundColor='#A98CE6' textColor='white' onPress={() => {navigation.navigate('SignUp')}}>
          Sign Up
        </Button>
      </View>
      <View style={styles.buttonArea}>
        <Button backgroundColor='#F0F1F1' textColor='black' onPress={() => {navigation.navigate('LogIn')}}>
          Log In
        </Button>
      </View>
    </View>
    //</SafeAreaView>
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
    paddingTop: 15,
  },
  logoContainer: {
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});