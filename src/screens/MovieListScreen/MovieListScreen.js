import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import MovieListIcon from '../../components/MovieListIcon/MovieListIcon';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const MovieListScreen = ({navigation}) => {
  const [movieData, setMovieData] = useState({});
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWYyNTk0MzhlZjk3MTZmNzI0NmRhMTQyZWExNmFkNyIsInN1YiI6IjY1ZDgxZjk5MTQ5NTY1MDE3YmY1ODA3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SwI18aSG4Z1ZlAs3mBPr5EhvhnCrP7Pf3nUC6RZXoKE',
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        setMovieData(json);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Trending now!</Text>
      <FlatList
        data={movieData.results}
        renderItem={({item}) => (
          <MovieListIcon details={item} nav={navigation} />
        )}
      />
    </View>
  );
};

export default MovieListScreen;
