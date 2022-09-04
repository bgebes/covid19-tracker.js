import { configureStore } from '@reduxjs/toolkit';
import StatsReducer from './Stats/StatsSlice';

export const store = configureStore({
  reducer: {
    stats: StatsReducer,
  },
});
