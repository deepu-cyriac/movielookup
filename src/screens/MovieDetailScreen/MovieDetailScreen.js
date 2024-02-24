import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';

import MovieDetailsView from '../../components/MovieDetailsView/MovieDetailsView';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  spinner: {
    flex: 1,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 10,
  },
  overview: {
    color: 'white',
    fontSize: 15,
  },
});

const MovieDetailScreen = ({navigation, route}) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${route.params.id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWYyNTk0MzhlZjk3MTZmNzI0NmRhMTQyZWExNmFkNyIsInN1YiI6IjY1ZDgxZjk5MTQ5NTY1MDE3YmY1ODA3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SwI18aSG4Z1ZlAs3mBPr5EhvhnCrP7Pf3nUC6RZXoKE',
      },
    })
      .then(response => response.json())
      .then(json => {
        setMovieDetails(json);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [route.params.id]);

  return loading ? (
    <View style={styles.loading}>
      <ActivityIndicator size="large" style={styles.spinner} />
    </View>
  ) : movieDetails?.success === false ? (
    <ErrorMessage />
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>{movieDetails?.title}</Text>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`,
          method: 'POST',
          headers: {
            Pragma: 'no-cache',
          },
        }}
        style={styles.image}
      />
      <Text style={styles.overview}>
        {'\n'}
        Overview{'\n\n'}
        {movieDetails?.overview}
      </Text>
      <MovieDetailsView data={movieDetails} />
    </View>
  );
};

export default MovieDetailScreen;
