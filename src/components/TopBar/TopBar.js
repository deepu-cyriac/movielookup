import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 60,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie lookup</Text>
    </View>
  );
};

export default TopBar;
