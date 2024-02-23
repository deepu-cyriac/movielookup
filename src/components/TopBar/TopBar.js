import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

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
      <Text style={styles.title}>Find that movie!</Text>
    </View>
  );
};

export default TopBar;
