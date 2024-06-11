import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginForm from './components/login';
import TodoList from './components/TodoList';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  // Your home screen implementation
  return null;
};

const ProfileScreen = () => {
  // Your profile screen implementation
  return null;
};

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Todo" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};