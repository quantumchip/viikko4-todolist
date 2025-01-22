import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Todo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    marginTop: 25,
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  
  headerText: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Header;