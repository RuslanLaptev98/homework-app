import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Task as TaskType,
  tasksActions,
} from '../../../store/tasks/tasksSlice';
import { useDispatch } from 'react-redux';
import CompletedButton from '../../../ui/CompletedButton';
import DeleteButton from '../../../ui/DeleteButton';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';

interface TaskProps {
  task: TaskType;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const dispatch = useDispatch();

  const completionHandler = () => {
    if (task.completed) {
      dispatch(tasksActions.makeTaskNotComplete(task));
    } else {
      dispatch(tasksActions.completeTask(task));
    }
  };

  const removeTask = () => {
    dispatch(tasksActions.removeTask(task));
  };

  return (
    <View style={styles.container}>
      <CompletedButton
        completed={task.completed}
        completionHandler={completionHandler}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{task.title}</Text>
        <Text
          style={
            task.completed
              ? { ...styles.task, ...styles.taskCompleted }
              : styles.task
          }
        >
          {task.task}
        </Text>
      </View>

      <DeleteButton onPress={removeTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.line_lighter,
  },
  content: {
    width: 0,
    flexGrow: 1,
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: Fonts.InterMedium,
    fontSize: 17,
    paddingBottom: 2,
    color: Colors.text_main,
  },
  task: {
    fontFamily: Fonts.InterRegular,
    fontSize: 13,
    lineHeight: 17,
    color: Colors.text_main,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: Colors.text_lighter_2,
  },
});

export default Task;
