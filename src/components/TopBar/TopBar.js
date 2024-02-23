import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 60,
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  optionview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  touchop: {
    width: 150,
    height: 150,
  },
  options: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

const TopBar = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.nav('movie');
        }}>
        <Text style={styles.title}>Movie lookup</Text>
      </TouchableOpacity>

      <View style={styles.optionview}>
        <TouchableOpacity
          style={styles.touchop}
          onPress={() => {
            props.nav('popular');
          }}>
          <Text style={styles.options}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchop}
          onPress={() => {
            props.nav('toprated');
          }}>
          <Text style={styles.options}>Top Rated</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchop}
          onPress={() => {
            props.nav('upcoming');
          }}>
          <Text style={styles.options}>Upcoming</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
