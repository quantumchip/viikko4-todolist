import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, toggleTask }) => {

  return (
    <TouchableOpacity onPress={() => toggleTask(task.id)}>
      <View style={styles.taskItem}>
        <Text style={[styles.taskText, task.done && styles.taskDone]}>{task.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
  },

  taskText: {
    fontSize: 20,
  },

  taskDone: {
    textDecorationLine: 'line-through',
    color: 'black',
  },
});

export default TaskItem;