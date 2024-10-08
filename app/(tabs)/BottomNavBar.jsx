// app/(tabs)/BottomNavBar.jsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const BottomNavBar = ({ activeRoute }) => {
    const navigation = useNavigation();
    const accentColor = "#A98CE6";

    return (
        <View style={styles.navBar}>
            <TouchableOpacity
                onPress={() => navigation.navigate('feed')}
                style={activeRoute === 'feed' ? [styles.button, { backgroundColor: accentColor }] : styles.button}
            >
                <Icon name="home" size={30} color={activeRoute === 'feed' ? "#FFFFFF" : "#1E1E1E"} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('connection')}
                style={activeRoute === 'connection' ? [styles.button, { backgroundColor: accentColor }] : styles.button}
            >
                <Icon name="account-group" size={30} color={activeRoute === 'connection' ? "#FFFFFF" : "#1E1E1E"} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('createPost')}
                style={activeRoute === 'createPost' ? [styles.button, { backgroundColor: accentColor }] : styles.button}
            >
                <Icon name="plus-circle" size={30} color={activeRoute === 'createPost' ? "#FFFFFF" : "#1E1E1E"} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('notification')}
                style={activeRoute === 'notification' ? [styles.button, { backgroundColor: accentColor }] : styles.button}
            >
                <Icon name="bell" size={30} color={activeRoute === 'notification' ? "#FFFFFF" : "#1E1E1E"} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('profile')}
                style={activeRoute === 'profile' ? [styles.button, { backgroundColor: accentColor }] : styles.button}
            >
                <Icon name="account" size={30} color={activeRoute === 'profile' ? "#FFFFFF" : "#1E1E1E"} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 56,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#000000',
    },
    button: {
        padding: 5,
        borderRadius: 10,
    },
});

export default BottomNavBar;