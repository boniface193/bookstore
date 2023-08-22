
import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/bookSlice';
import categorySlice from './categories/categorySlice';

const store = configureStore({
  reducer: {
    books: bookSlice,
    categories: categorySlice,
  },
});


export default store;
