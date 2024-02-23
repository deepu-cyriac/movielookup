import React from 'react';
// import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieListScreen from './src/screens/MovieListScreen/MovieListScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen/MovieDetailScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MovieList"
          component={MovieListScreen}
          options={{title: 'Movie lookup'}}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetailScreen}
          options={{title: 'Movie lookup'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
