import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
};

// Your token
const token = 'eyJhbGciOiJIUzI1NiJ9.QW1pcg.eSeJvnsTMnlZFdYyZu_NuQpMUhBudXFbzi5fIerVWxw';

// Create a new async thunk for fetching content using GET request
export const getContent = createAsyncThunk('content/fetchContent', async (requestData) => {
  try {
    console.log('i am in slice');
    const res = await axios.post('http://localhost:3000/quize', requestData, {
      headers: {
        Authorization: `Bearer ${token}`, // Include your token here
      },
    });
    const data = res.data;
    console.log(res);
    return data;
  } catch (error) {
    throw error;
  }
});

// Create a new async thunk for fetching content using GET request
export const getContent = createAsyncThunk('content/getContent', async () => {
  try {
    console.log('i am in slice');
    const res = await axios.get('http://localhost:3000/quize', {
      headers: {
        Authorization: `Bearer ${token}`, // Include your token here
      },
    });
    const data = res.data;
    console.log(res);
    return data;
  } catch (error) {
    throw error;
  }
});

const fetchQuizSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Add reducers for the new getContent async thunk
    builder.addCase(getContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    });
    builder.addCase(getContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default fetchQuizSlice.reducer;
