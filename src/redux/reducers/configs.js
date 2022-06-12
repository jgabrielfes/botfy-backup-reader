import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  theme: localStorage.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'),
  chats: localStorage.chats ? JSON.parse(localStorage.chats) : [],
  currentChat: '',
};

const configs = createSlice({
  name: 'configs',
  initialState: INITIAL_STATE,
  reducers: {
    doChangeTheme: (state) => {
      localStorage.theme = state.theme === 'light' ? 'dark' : 'light';
      state.theme = localStorage.theme;
    },
    setChat: (state, { payload }) => {
      localStorage.chats = payload;
      state.chats = JSON.parse(payload);
    },
    setCurrentChat: (state, { payload }) => { state.currentChat = payload },
  },
});

export const { doChangeTheme, setChat, setCurrentChat } = configs.actions;

export default configs.reducer;
