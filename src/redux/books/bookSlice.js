
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TtED5mk394B1lPwmAh6C/books';

const initialState = {
  books: [],
  isLoading: true,
  error: undefined,
};

const fetchBook = createAsyncThunk('books/get', async () => {
  try {
    const data = await axios(baseURL);
    const requestUser = data.data;
    const book = Object.keys(requestUser).map((key) => ({
      item_id: key,
      title: requestUser[key][0].title,
      author: requestUser[key][0].author,
      category: requestUser[key][0].category,
      ...requestUser[key][0],
    }));
    return book;
  } catch (error) {
    return error;
  }
});

const createBook = createAsyncThunk('books/add', async (payload) => {
  try {
    const requestUser = await axios.post(baseURL, payload);
    return requestUser.data;
  } catch (error) {
    return error;
  }
});

const deleteBook = createAsyncThunk('books/remove', async (id) => {
  try {
    const requestUser = await axios.delete(`${baseURL}/${id}`);
    return requestUser.data;
  } catch (error) {
    return error;
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.books = state.books.filter((item) => item.item_id !== itemId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoading = true;
    }).addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      state.error = '';
    }).addCase(fetchBook.rejected, (state, action) => {
      state.isLoading = false;
      state.books = [];
      state.error = action.error.message;
    });
    builder.addCase(createBook.fulfilled, (state) => {
      state.isLoading = false;
    }).addCase(createBook.rejected, (state, payload) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(deleteBook.fulfilled, (state) => {
      state.isLoading = false;
    }).addCase(deleteBook.rejected, (state, payload) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export { fetchBook, createBook, deleteBook };

export default bookSlice.reducer;
