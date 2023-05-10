import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  total: 0,
  isLoading: true,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = action.payload;
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.books = state.books.filter((item) => item.id !== itemId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;