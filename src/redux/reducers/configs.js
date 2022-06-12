import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  theme: localStorage.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'),
};

const configs = createSlice({
  name: 'configs',
  initialState: INITIAL_STATE,
  reducers: {
    doChangeTheme: (state) => {
      localStorage.theme = state.theme === 'light' ? 'dark' : 'light';
      state.theme = localStorage.theme;
    },
  },
});

export const { doChangeTheme } = configs.actions;

export default configs.reducer;
