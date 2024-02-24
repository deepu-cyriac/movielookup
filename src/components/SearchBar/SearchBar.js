import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

const SearchBar = props => {
  const [changeText, onChangeText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        onChangeText={onChangeText}
        value={changeText}
        placeholder="Search"
      />
      <Button
        title="Go"
        onPress={() => {
          props.option('search');
          props.setsearch(changeText);
        }}
        color={'black'}
      />
    </View>
  );
};

export default SearchBar;
