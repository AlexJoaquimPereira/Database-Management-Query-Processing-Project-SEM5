    // File: ProfileScreen.js

    import React, { useState, useEffect } from 'react';
    import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
    import axios from 'axios';

    const { width, height } = Dimensions.get('window');

    const ProfileScreen = () => {
    const [posts, setPosts] = useState([]);
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('Posts');

    // Fetch profile data from API
    const fetchProfile = async () => {
        try {
        const response = await axios.get('https://api.example.com/profile'); // Replace with your API
        setProfile(response.data);
        } catch (error) {
        console.error('Error fetching profile:', error);
        }
    };

    // Fetch posts from API
    const fetchPosts = async () => {
        try {
        const response = await axios.get('https://api.example.com/posts'); // Replace with your API
        setPosts(response.data);
        } catch (error) {
        console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
        await fetchProfile();
        await fetchPosts();
        setLoading(false);
        };
        fetchData();
    }, []);

    const renderPost = ({ item }) => (
        <View style={styles.postContainer}>
        <Text style={styles.postDate}>{item.date}</Text>
        <View style={styles.tagContainer}>
            {item.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
            </View>
            ))}
        </View>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postContent}>{item.content}</Text>
        <View style={styles.postActions}>
            <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.likeText}>{item.likes} Likes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.commentText}>{item.comments} Comments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.shareText}>Share</Text>
            </TouchableOpacity>
        </View>
        </View>
    );

    return (
        <View style={styles.container}>
        {/* Profile Section */}
        {loading ? (
            <ActivityIndicator size="large" color="#A98CE6" style={styles.loader} />
        ) : (
            <View style={styles.profileSection}>
            <View style={styles.headerContainer}>
                <Image source={{ uri: profile.profilePic }} style={styles.profilePic} />
                <View style={styles.connectionStats}>
                <View style={styles.statBox}>
                    <Text style={styles.statText}>Connections {profile.connections}</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statText}>Communities {profile.communities}</Text>
                </View>
                </View>
                <Text style={styles.profileName}>{profile.name}</Text>
            </View>
            <Text style={styles.aboutTitle}>About</Text>
            <Text style={styles.aboutText}>{profile.about}</Text>
            </View>
        )}

        {/* Tabs */}
        <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Posts')}>
            <Text style={styles.tabLabel}>Posts</Text>
            {activeTab === 'Posts' && <View style={styles.indicator} />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Media')}>
            <Text style={styles.tabLabel}>Media</Text>
            {activeTab === 'Media' && <View style={styles.indicator} />}
            </TouchableOpacity>
        </View>

        {/* Posts or Media Section */}
        {loading ? (
            <ActivityIndicator size="large" color="#A98CE6" style={styles.loader} />
        ) : (
            activeTab === 'Posts' ? (
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderPost}
                style={styles.feedContainer}
                showsVerticalScrollIndicator={false}
            />
            ) : (
            <View style={styles.mediaContainer}>
                <Text style={styles.mediaText}>Media Content Goes Here</Text>
                {/* Add Media Content Logic Here */}
            </View>
            )
        )}
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 16,
    },
    profileSection: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
        marginBottom: 24,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profilePic: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 2,
        borderColor: '#A98CE6',
        marginRight: 16,
    },
    connectionStats: {
        flex: 1,
    },
    statBox: {
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginBottom: 6,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    statText: {
        fontSize: 14,
        color: '#333333',
    },
    profileName: {
        fontSize: 22,
        fontWeight: '700',
        color: '#333333',
    },
    aboutTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
    },
    aboutText: {
        fontSize: 14,
        color: '#666666',
        lineHeight: 20,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#EAECEC',
        borderRadius: 10,
        marginBottom: 16,
        paddingVertical: 10,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    tabLabel: {
        fontWeight: '700',
        fontSize: 16,
        color: '#444444',
    },
    indicator: {
        height: 4,
        width: '100%',
        backgroundColor: '#A98CE6',
        borderRadius: 100,
    },
    feedContainer: {
        flex: 1,
    },
    postContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 20,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
    },
    postDate: {
        fontSize: 12,
        color: '#999',
        marginBottom: 10,
    },
    tagContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    tag: {
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 8,
    },
    tagText: {
        fontSize: 12,
        color: '#000',
    },
    postTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        marginBottom: 8,
    },
    postContent: {
        fontSize: 14,
        color: '#333',
        marginBottom: 10,
    },
    postActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likeText: {
        fontSize: 14,
        color: '#000',
    },
    commentText: {
        fontSize: 14,
        color: '#000',
    },
    shareText: {
        fontSize: 14,
        color: '#000',
    },
    loader: {
        marginTop: 50,
    },
    mediaContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mediaText: {
        fontSize: 16,
        color: '#333',
    },
    });

    export default ProfileScreen;
