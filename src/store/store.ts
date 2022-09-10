import { configureStore } from '@reduxjs/toolkit';
import { FilterState, filterReducer } from './filter/filterSlice';
import { tasksReducer, TasksState } from './tasks/tasksSlice';

export interface State {
  filter: FilterState;
  tasks: TasksState;
}

const store = configureStore({
  reducer: {
    filter: filterReducer,
    tasks: tasksReducer,
  },
});

export default store;
