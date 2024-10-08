import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const PostTemplate = ({ postId }) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://your-api-url.com/api/posts/${postId}`);
                setPost(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text style={styles.error}>{error}</Text>;
    }

    return (
        <View style={styles.postFrame}>
            {post.image ? (
                <Image
                    source={{ uri: post.image }}
                    style={styles.postImage}
                />
            ) : null}
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.date}>{new Date(post.date).toLocaleString()}</Text>
            <Text style={styles.content}>{post.content}</Text>
            <View style={styles.tagsContainer}>
                {post.tags.map((tag, index) => (
                    <View style={styles.tag} key={index}>
                        <Text style={styles.tagText}>{tag}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.likesContainer}>
                <Image
                    source={{ uri: 'thumbs_up_icon.png' }}
                    style={styles.icon}
                />
                <Text style={styles.likesCount}>{post.likes}K</Text>
                <Image
                    source={{ uri: 'comments_icon.png' }}
                    style={styles.icon}
                />
                <Text style={styles.commentsCount}>{post.comments}K</Text>
                <Image
                    source={{ uri: 'share_icon.png' }}
                    style={styles.icon}
                />
            </View>
            <Image
                source={{ uri: post.profileImage }}
                style={styles.profilePic}
            />
            <Text style={styles.userName}>{post.userName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    postFrame: {
        width: '90%',
        marginHorizontal: '5%',
        borderRadius: 10,
        backgroundColor: '#FEFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        padding: 10,
        marginBottom: 20,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        color: '#000',
        marginBottom: 5,
    },
    date: {
        fontFamily: 'Roboto',
        fontSize: 10,
        lineHeight: 12,
        color: '#000',
        marginBottom: 10,
    },
    content: {
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: 18,
        color: '#000',
        marginBottom: 10,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    tag: {
        backgroundColor: '#D9D9D9',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginRight: 5,
        marginBottom: 5,
    },
    tagText: {
        fontFamily: 'Roboto',
        fontSize: 10,
        color: '#000',
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 5,
    },
    likesCount: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#000',
        marginRight: 15,
    },
    commentsCount: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#000',
        marginRight: 15,
    },
    profilePic: {
        width: 39,
        height: 39,
        borderColor: '#A98CE6',
        borderWidth: 1,
        borderRadius: 19.5,
        marginBottom: 5,
    },
    userName: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 18,
        color: '#000',
    },
    error: {
        color: 'red',
        textAlign: 'center',
    },
});

export default PostTemplate;
