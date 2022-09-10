import React from 'react';
import { View } from 'react-native';
import AddTask from '../features/AddTask';
import Filter from '../features/Filter';
import TaskList from '../features/TaskList';

const HomeScreen: React.FC = () => {
  return (
    <View>
      <Filter />
      <TaskList />
      <AddTask />
    </View>
  );
};

export default HomeScreen;
