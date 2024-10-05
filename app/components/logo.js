import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

const logo = () => {
    return (
        <View style={styles.logoContainer}>
            <Image source={require('@/assets/images/connectify-logo.png')} style={styles.logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    
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
    
    
});

export default logo