import { configureStore } from '@reduxjs/toolkit';
import configs from '../reducers/configs';

const store = configureStore({
  reducer: {
    configs,
  },
});

export default store;
