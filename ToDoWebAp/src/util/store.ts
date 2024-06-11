import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import todoSlice from './slice/todoSlice'
const store = configureStore({
  reducer: {
    auth: authReducer,
    todo:todoSlice
  },
});

export default store;