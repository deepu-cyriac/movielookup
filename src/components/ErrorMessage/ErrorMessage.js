import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
  message: {
    flex: 1,
    alignSelf: 'center',
    color: 'white',
    marginVertical: 200,
    fontSize: 15,
  },
});
const ErrorMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Something went wrong. Please try again later.
      </Text>
    </View>
  );
};

export default ErrorMessage;
