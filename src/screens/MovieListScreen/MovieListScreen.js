import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

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

const MovieListScreen = () => {
  const [movieData, setMovieData] = useState([]);
  const movieResults = fetch(
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
  //console.log(movieData);
  return (
    <View>
      <Text>Movie List Screen</Text>
      <Text>{movieResults.page}</Text>
      <FlatList
        data={movieData.results}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                method: 'POST',
                headers: {
                  Pragma: 'no-cache',
                },
              }}
              style={{width: 400, height: 400}}
            />
            <Text>{item.overview}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MovieListScreen;
