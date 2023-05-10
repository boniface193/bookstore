import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    book: [],
    categories : [],
  },
});