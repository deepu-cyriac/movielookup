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
        onChangeText={onChangeText}
        value={changeText}
        placeholder="Search"
        placeholderTextColor="#000000"
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
