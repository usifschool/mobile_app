import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button } from 'react-native-paper';
import axios from 'axios';

const API_KEY = '82d6929b7f5e4281bef458fabbbc9eca';
const TRENDING_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const Home = ({ navigation }) => {
    const [trendingNews, setTrendingNews] = useState([]);
    const [loadingTrending, setLoadingTrending] = useState(true);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetchTrendingNews();
    }, []);

    // trending api fetching function
    const fetchTrendingNews = async () => {
        try {
            setLoadingTrending(true);
            const response = await axios.get(TRENDING_API_URL);
            setTrendingNews(response.data.articles);
        } catch (error) {
            console.error('Error fetching trending news:', error);
        } finally {
            setLoadingTrending(false);
        }
    };

    const fetchSearchNews = async () => {
        if (!query) return;
        navigation.navigate('Search', { query }); // Navigate to Search screen with query
    };

    const renderItem = ({ item }) => (
        <Card style={styles.card} onPress={() => navigation.navigate('Detail', { article: item })}>
            {item.urlToImage && <Card.Cover source={{ uri: item.urlToImage }} />}
            <Card.Content>
                <Title>{item.title}</Title>
                {/* {item.author && <Text style={styles.author}>By {item.author}</Text>} */}
                {/* <Paragraph>{item.description}</Paragraph> */}
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => navigation.navigate('Detail', { article: item })}>Read More</Button>
            </Card.Actions>
        </Card>
    );

    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search for news..."
                    value={query}
                    onChangeText={setQuery}
                />
                <Card.Actions>
                <Button title="Search" onPress={fetchSearchNews} >🔍</Button>
                </Card.Actions>
            </View>

            {/* Trending News Section */}
            <Text style={styles.sectionTitle}>🔥 Trending News</Text>
            {loadingTrending ? (
                <ActivityIndicator animating={true} size="large" style={{ marginTop: 20 }} />
            ) : (
                <FlatList
                    data={trendingNews}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchBar: {
        flex: 1,
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        marginRight: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#333',
    },
    card: {
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    author: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
});

export default Home;
