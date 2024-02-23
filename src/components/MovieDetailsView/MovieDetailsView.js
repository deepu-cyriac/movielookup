import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  textcolor: {
    color: 'white',
    fontSize: 15,
  },
});

const MovieDetailsView = props => {
  const data = props?.data;
  return (
    <View style={styles.container}>
      <Text style={styles.textcolor}>Status: {data?.status}</Text>
      <Text style={styles.textcolor}>Release date: {data?.release_date}</Text>
      <Text style={styles.textcolor}>Runtime: {data?.runtime} min</Text>
      <Text style={styles.textcolor}>Budget: {data?.budget}$</Text>
      <Text style={styles.textcolor}>Revenue: {data?.revenue}$</Text>
      {/* <FlatList
        data={data.production_companies}
        renderItem={({item}) => {
          <Text style={styles.textcolor}>{item.name}</Text>;
        }}
        keyExtractor={item => item.id}
      /> */}
    </View>
  );
};

export default MovieDetailsView;
