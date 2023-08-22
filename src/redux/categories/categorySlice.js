
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  isLoading: true,
};

const categorySlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    bookStatus: (state) => {
      state.books = [];
    },
  },
});

export const { bookStatus } = categorySlice.actions;

export default categorySlice.reducer;
