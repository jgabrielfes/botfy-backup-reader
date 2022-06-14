import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  theme: localStorage.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'),
  loading: true,
  currentChat: null,
  fullContent: [],
  visibleContent: [],
};

const configs = createSlice({
  name: 'configs',
  initialState: INITIAL_STATE,
  reducers: {
    doChangeTheme: (state) => {
      localStorage.theme = state.theme === 'light' ? 'dark' : 'light';
      state.theme = localStorage.theme;
    },
    setLoading: (state, { payload }) => { state.loading = payload },
    setCurrentChat: (state, { payload }) => { state.currentChat = payload },
    setFullContent: (state, { payload }) => {
      state.fullContent = JSON.parse(payload);
      state.visibleContent = [];
    },
    setVisibleContent: (state, { payload }) => { state.visibleContent = payload },
  },
});

export const { doChangeTheme, setLoading, setCurrentChat, setFullContent, setVisibleContent } = configs.actions;

export default configs.reducer;
