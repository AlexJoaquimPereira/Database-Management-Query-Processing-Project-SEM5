import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch('https://your-api-url.com/notifications');
                const data = await response.json();
                setNotifications(data);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#A98CE6" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Notifications</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                {notifications.map((notification, index) => (
                    <View key={index} style={styles.notificationItem}>
                        <Text style={styles.notificationTitle}>{notification.title}</Text>
                        <Text style={styles.notificationMessage}>{notification.message}</Text>
                        <Text style={styles.notificationTime}>{notification.time}</Text>
                    </View>
                ))}
            </ScrollView>
            {/* Navigation bar is included from _layout, no need to redefine it */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        position: 'absolute',
        width: '100%',
        height: 50,
        top: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 15,
    },
    headerText: {
        fontFamily: 'Keania One',
        fontSize: 26,
        lineHeight: 32,
        color: '#444444',
    },
    scrollView: {
        marginTop: 80, // Adjust for header
    },
    notificationItem: {
        backgroundColor: '#FEFFFF',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
    },
    notificationTitle: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: '#000000',
    },
    notificationMessage: {
        fontFamily: 'Roboto',
        fontSize: 10,
        color: '#000000',
    },
    notificationTime: {
        fontFamily: 'Roboto',
        fontSize: 8,
        color: '#000000',
    },
});

export default Notifications;
