import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const SubmitButton = ({handleSubmit,btntitle}) => {
  return (
    <View style={styles.Container}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{btntitle}</Text>
    </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    Container:{
        alignItems:'center',
        margin:20,
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
export default SubmitButton