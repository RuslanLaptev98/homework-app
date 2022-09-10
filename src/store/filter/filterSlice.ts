import { createSlice } from '@reduxjs/toolkit';

export type Option =
  | 'Показывать все задания'
  | 'Выполненные'
  | 'Не выполненные';

const initialState: { option: Option } = {
  option: 'Показывать все задания',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action: { type: string; payload: Option }) => {
      state.option = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
