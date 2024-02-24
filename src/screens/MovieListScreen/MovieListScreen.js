import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import MovieListIcon from '../../components/MovieListIcon/MovieListIcon';
import TopBar from '../../components/TopBar/TopBar';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SearchBar from '../../components/SearchBar/SearchBar';

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
    paddingBottom: 5,
    position: 'absolute',
    bottom: 0,
    marginLeft: '15%',
  },
  pagebutton: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 5,
    paddingBottom: 0,
    marginLeft: 1,
    marginRight: 25,
    marginBottom: 1,
  },
  touchop: {
    width: 150,
    height: 50,
  },
  textcolor: {
    color: 'white',
    fontSize: 20,
  },
});

const MovieListScreen = ({navigation}) => {
  const [option, setOption] = useState('movie');
  const [movieData, setMovieData] = useState({});
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);
  useEffect(() => {
    const urls = {
      movie: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc`,
      popular: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNo}`,
      toprated: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNo}`,
      upcoming: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNo}`,
      search: `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`,
    };
    setLoading(true);
    fetch(urls[option], {
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
        setMovieData(json);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pageNo, option, searchTerm]);

  return loading ? (
    <View style={styles.loading}>
      <ActivityIndicator size="large" style={styles.spinner} />
    </View>
  ) : movieData?.success === false ? (
    <ErrorMessage />
  ) : (
    <View style={styles.container}>
      <TopBar nav={setOption} />
      <SearchBar setsearch={setSearchTerm} option={setOption} />
      {movieData?.total_results === 0 ? (
        <Text style={styles.textcolor}>No results found</Text>
      ) : (
        <></>
      )}
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
