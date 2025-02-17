import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button } from 'react-native-paper';  // Add the missing import for Appbar
import axios from 'axios';

const API_KEY = '82d6929b7f5e4281bef458fabbbc9eca';

const { width } = Dimensions.get('window');

const Search = ({ route, navigation }) => {
    const [searchNews, setSearchNews] = useState([]);
    const [loadingSearch, setLoadingSearch] = useState(true);
    const { query } = route.params;

    useEffect(() => {
        fetchSearchNews();
    }, [query]);

    const fetchSearchNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
            setSearchNews(response.data.articles);
        } catch (error) {
            console.error('Error fetching search news:', error);
        } finally {
            setLoadingSearch(false);
        }
    };

    const renderItem = ({ item }) => (
        <Card style={styles.card} onPress={() => navigation.navigate('Detail', { article: item })}>
            {item.urlToImage && <Card.Cover source={{ uri: item.urlToImage }} />}
            <Card.Content>
                <Title style={styles.title}>{item.title}</Title>
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
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content>
                    <Text style={styles.appbarTitle}>Search Results</Text>  {/* Wrapped title in Text */}
                </Appbar.Content>
                <Appbar.Action icon="home" onPress={() => navigation.navigate('Home')} />
            </Appbar.Header>

            {loadingSearch ? (
                <ActivityIndicator animating={true} size="large" style={{ marginTop: 20 }} />
            ) : (
                <FlatList
                    data={searchNews}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    scrollEnabled={true}
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
    card: {
        margin: 10,
        width: width - 40,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    author: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    appbarTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Search;
