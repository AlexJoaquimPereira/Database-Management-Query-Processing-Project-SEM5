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
                onPress={() => navigation.navigate('Feed')}
                style={activeRoute === 'Feed' ? [styles.button, { backgroundColor: accentColor }] : styles.button}
            >
                <Icon name="home" size={30} color={activeRoute === 'Feed' ? "#FFFFFF" : "#1E1E1E"} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Connection')}
                style={activeRoute === 'Connection' ? [styles.button, { backgroundColor: accentColor }] : styles.button}
            >
                <Icon name="account-group" size={30} color={activeRoute === 'Connection' ? "#FFFFFF" : "#1E1E1E"} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('CreatePost')}
                style={activeRoute === 'CreatePost' ? [styles.button, { backgroundColor: accentColor }] : styles.button}
            >
                <Icon name="plus-circle" size={30} color={activeRoute === 'CreatePost' ? "#FFFFFF" : "#1E1E1E"} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}
                style={activeRoute === 'Notification' ? [styles.button, { backgroundColor: accentColor }] : styles.button}
            >
                <Icon name="bell" size={30} color={activeRoute === 'Notification' ? "#FFFFFF" : "#1E1E1E"} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
                style={activeRoute === 'Profile' ? [styles.button, { backgroundColor: accentColor }] : styles.button}
            >
                <Icon name="account" size={30} color={activeRoute === 'Profile' ? "#FFFFFF" : "#1E1E1E"} />
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
