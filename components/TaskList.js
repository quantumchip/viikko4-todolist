import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import TaskItem from './TaskItem';
import AddTask from './AddTask';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    };
    loadTasks();
  }, []);


  const addTask = async (task) => {
    const newTasks = [...tasks, { id: Date.now().toString(), text: task, done: false }];
    setTasks(newTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const toggleTask = async (id) => {
    const newTasks = tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  };


  return (
    <View style={styles.container}>
      <AddTask addTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} toggleTask={toggleTask} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default TaskList;