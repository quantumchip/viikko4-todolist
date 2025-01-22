import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import TaskList from './components/TaskList';
import Header from './components/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TaskList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
