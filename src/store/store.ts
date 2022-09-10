import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlice';
import { Option } from './filter/filterSlice';

export interface State {
  filter: {
    option: Option;
  };
}

const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export default store;
