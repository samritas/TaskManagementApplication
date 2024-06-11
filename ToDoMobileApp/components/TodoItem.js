import React from 'react';
import { View, Text, CheckBox, TouchableOpacity } from 'react-native';
import styles from './styles.css'; // Import the styles

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <View style={styles.todo-item}>
      <CheckBox
        value={task.completed}
        onValueChange={() => toggleCompleted(task.id)}
      />
      <Text style={[styles.todo-item-text, task.completed && styles.completed]}>
        {task.title}
      </Text>
      <Text style={[styles.todo-item-text, task.completed && styles.completed]}>
        {task.description}
      </Text>
      <Text style={[styles.todo-item-text, task.completed && styles.completed]}>
      Deadline: {task.deadline}
      </Text>
      <TouchableOpacity
        style={styles.delete-button}
        onPress={() => deleteTask(task.id)}
      >
        <Text style={{ color: '#fff' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}