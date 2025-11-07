import { configureStore } from '@reduxjs/toolkit';

//import your slices here
import redditReducer from '../features/redditSlice';

export const store = configureStore({
  reducer: {
    // This is where your "slices" will go
    reddit: redditReducer,
  },
});