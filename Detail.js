import React from 'react';
import { View, Text, StyleSheet, Linking, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const Detail = ({ route }) => {
    const { article } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Card style={styles.card}>
                {article.urlToImage && (
                    <Card.Cover source={{ uri: article.urlToImage }} style={styles.coverImage} />
                )}
                <Card.Content style={styles.content}>
                    <View style={styles.titleContainer}>
                        <Title style={styles.title}>{article.title}</Title>
                        
                    </View>
                    <View style={styles.metaContainer}>
                        {article.author && (
                            <Text style={styles.author}>By {article.author}</Text>
                        )}
                        <Text style={styles.publishedAt}>
                            {new Date(article.publishedAt).toLocaleDateString()}
                        </Text>
                        
                    </View>
                    
                    <Paragraph style={styles.description}>
                        {article.description}
                    </Paragraph>
                    <Paragraph style={styles.contentText}>
                        {article.content}
                    </Paragraph>
                    <Button
                            onPress={() => Linking.openURL(article.url)}
                            style={styles.iconButton}
                        >
                            <MaterialIcons name="open-in-new" size={18} color="#6200ee" /> Open in Browser
                        </Button>
                </Card.Content>
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    card: {
        
        margin: 0,
        borderRadius: 0,
        elevation: 0,
        backgroundColor: '#fff',
    },
    coverImage: {
        width: '100%',
        height: 250,
        borderRadius: 0,
    },
    content: {
        padding: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
        marginRight: 10,
    },
    iconButton: {
        margin: 15,
        padding: 0,
    },
    metaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    author: {
        fontSize: 16,
        color: '#666',
    },
    publishedAt: {
        fontSize: 14,
        color: '#888',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#444',
        marginBottom: 20,
    },
    contentText: {
        fontSize: 14,
        lineHeight: 22,
        color: '#555',
    },
});

export default Detail;