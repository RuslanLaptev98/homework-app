import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import store, { State } from '../../store/store';
import { fetchTasks, tasksActions } from '../../store/tasks/tasksSlice';
import { useEffect } from 'react';
import Task from './Task';

const TaskList: React.FC = () => {
  const dispatch = useDispatch<typeof store.dispatch>();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const { tasks, loading, error } = useSelector((state: State) => state.tasks);

  const addTaskHandler = () => {
    dispatch(
      tasksActions.addTask({
        task: 'Сделать дз',
        title: 'Английский',
        completed: false,
      })
    );
  };

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {!loading && error && <Text>{error}</Text>}
      {!loading && !error && (
        <FlatList
          data={tasks}
          renderItem={(task) => <Task task={task.item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
  },
});

export default TaskList;
