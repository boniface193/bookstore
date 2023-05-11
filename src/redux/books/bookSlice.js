import { createSlice } from '@reduxjs/toolkit';
import listBook from './listBook';

const initialState = {
  books: listBook,
  isLoading: true,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(
        action.payload,
      );
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.books = state.books.filter((item) => item.item_id !== itemId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
