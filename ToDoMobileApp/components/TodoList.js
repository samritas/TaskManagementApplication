import React, { useEffect, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import TodoItem from './TodoItem';
import { DeleteTodo, addTodo, getTodo } from '../util/todo';

export default function TodoList() {
  const [tasks,setTasks] = useState([])
  const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [deadline, setDeadline] = useState(new Date());
const [priority, setPriority] = useState('medium');
  const getData = async()=>{
    const data =  await getTodo()
    return setTasks(data)
  }
  useEffect(()=> {
    getData()
  })

  // Function to Add Task
  const addTask =async() =>{
    const reqdata = {
      title:title,
      description:description,
      deadline:deadline,
      priority:priority
  }
   await addTodo(reqdata)
       getData()
  }
  // Function to Delete Task
  const deleteTask =  async(id) => {
    await DeleteTodo(id)
    getData()
  }
  // Function to Toggle Task Completion
  function toggleCompleted(id) {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  }
  // Render TodoList Component
  return (
    <View>
    {tasks.map(task => (
      <TodoItem
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted}
      />
    ))}
    <TextInput
      value={title}
      onChangeText={setTitle}
      placeholder="Title"
    />
    <TextInput
      value={description}
      onChangeText={setDescription}
      placeholder="Description"
    />
    <DatePicker
      value={deadline}
      onChange={setDeadline}
      mode="date"
      format="YYYY-MM-DD"
    />
    <Picker
      selectedValue={priority}
      onValueChange={setPriority}
    >
      <Picker.Item label={0} value="low" />
      <Picker.Item label={1} value="medium" />
      <Picker.Item label={2} value="high" />
    </Picker>
    <Button title="Add" onPress={addTask} />
  </View>
  );
}