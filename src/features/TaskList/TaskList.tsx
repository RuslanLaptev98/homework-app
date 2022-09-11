import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import store, { State } from '../../store/store';
import { fetchTasks, Task as TaskType } from '../../store/tasks/tasksSlice';
import { useEffect } from 'react';
import Task from './Task';

const TaskList: React.FC = () => {
  const dispatch = useDispatch<typeof store.dispatch>();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const { tasks, loading, error } = useSelector((state: State) => state.tasks);
  const { option } = useSelector((state: State) => state.filter);

  const filteredTasks: TaskType[] =
    option === 'Выполненные'
      ? tasks.filter((task) => task.completed)
      : option === 'Не выполненные'
      ? tasks.filter((task) => !task.completed)
      : tasks;

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {!loading && error && <Text>{error}</Text>}
      {!loading && !error && (
        <FlatList
          data={filteredTasks}
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
