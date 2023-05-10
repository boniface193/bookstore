import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    book: [],
    categories: [],
  },
});

export default store;
