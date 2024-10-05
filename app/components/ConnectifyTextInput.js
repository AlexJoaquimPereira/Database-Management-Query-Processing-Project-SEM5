import React from 'react';
import { View, StyleSheet, TextInput, TextInputProps } from 'react-native';

/*
// Define the props for the TextInput component
interface CfyTextInputProps extends TextInputProps {
    placeholder: string;
    type?: 'email' | 'password' | 'username' | 'text'; // Add more types if needed
}
*/
/* 
 * import the file and use <CfyTextImput>
 * Provide placeholder, value, onChangeText attributes to the element
 * if it is a password add secureTextEntry (it is false by default)
*/

const CfyTextInput = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    ...props
}) => {
    return (
        <View style={styles.textBox}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textBox: {
        justifyContent: 'center',
        height: 40,
        margin: 12,
        maxWidth: 260,
        minWidth: 260,
        borderWidth: 0,
        padding: 10,
        backgroundColor: '#EAECEC',
        borderRadius: 3,
        elevation: 2,
    },
    input: {
        textAlign: 'left',
        fontSize: 16,
        fontFamily: 'Inter',
        paddingHorizontal: 5,
    },
});

export default CfyTextInput;
