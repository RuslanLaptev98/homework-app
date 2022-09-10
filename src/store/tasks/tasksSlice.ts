import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tasksData from '../../../mock-data/data.json';

export type Task = {
  title: string;
  task: string;
  completed: boolean;
};

export interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: string;
}

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: '',
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', () => {
  // request to server

  // mock data
  return tasksData;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: { type: string; payload: Task }) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: { type: string; payload: Task }) => {
      state.tasks = state.tasks.filter(
        (task) => task.title !== action.payload.title
      );
    },
    completeTask: (state, action: { type: string; payload: Task }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.title === action.payload.title) {
          task.completed = true;
        }
        return task;
      });
    },
    makeTaskNotComplete: (state, action: { type: string; payload: Task }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.title === action.payload.title) {
          task.completed = false;
        }
        return task;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
      state.error = '';
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.loading = false;
      state.tasks = [];
      state.error = action.error.message ?? 'Error: could not fetch tasks';
    });
  },
});

export const tasksActions = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
