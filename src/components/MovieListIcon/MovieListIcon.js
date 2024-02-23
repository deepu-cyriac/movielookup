import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',

    borderRadius: 10,
    backgroundColor: 'black',
    color: 'white',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

const MovieListIcon = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.nav.navigate('MovieDetail', {id: props?.details?.id});
      }}>
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${props?.details?.poster_path}`,
            method: 'POST',
            headers: {
              Pragma: 'no-cache',
            },
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{props?.details?.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieListIcon;
