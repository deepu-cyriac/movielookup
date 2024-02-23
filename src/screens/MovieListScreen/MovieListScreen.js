import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import MovieListIcon from '../../components/MovieListIcon/MovieListIcon';
import TopBar from '../../components/TopBar/TopBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'black',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  bottombar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 22,
    paddingBottom: 5,
  },
  pagebutton: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  touchop: {
    width: 200,
    height: 200,
  },
});

const MovieListScreen = ({navigation}) => {
  const [movieData, setMovieData] = useState({});
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc`,
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
  }, [pageNo]);

  return (
    <View style={styles.container}>
      <TopBar />
      <Text>Trending now!</Text>
      <FlatList
        data={movieData?.results}
        renderItem={({item}) => (
          <MovieListIcon details={item} nav={navigation} />
        )}
      />
      <View style={styles.bottombar}>
        <TouchableOpacity
          onPress={() => {
            pageNo > 1 ? setPageNo(pageNo - 1) : null;
          }}
          style={styles.touchop}>
          <Text style={styles.pagebutton}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPageNo(pageNo + 1);
          }}
          style={styles.touchop}>
          <Text style={styles.pagebutton}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MovieListScreen;
