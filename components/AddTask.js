import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <View style={styles.addTask}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addTask: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  input: {
    flex: 1,
    marginRight: 10,
    padding: 5,
    fontSize: 20,
  },

  button: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,

  },

  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddTask;