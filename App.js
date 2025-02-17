import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';  // Import PaperProvider correctly
import Search from './Search';
import HomeScreen from './Home';  // Assuming you have a separate HomeScreen file
import DetailScreen from './Detail'; // Assuming you have a separate DetailScreen file

const Stack = createStackNavigator();

export default function App() {
    return (
        <PaperProvider>  {/* PaperProvider should wrap the NavigationContainer */}
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Search" component={Search} />
                    <Stack.Screen name="Detail" component={DetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
