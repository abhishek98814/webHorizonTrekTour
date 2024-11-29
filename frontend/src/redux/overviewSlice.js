import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Example async thunk to fetch overview data
export const fetchOverviewAsync = createAsyncThunk(
  'overview/fetchOverview',
  async () => {
    const response = await fetch('http://localhost:3000/api/v1/overviews');
    const data = await response.json();
    return data;
  }
);

const overviewSlice = createSlice({
  name: 'overview',
  initialState: {
    overviews: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOverviewAsync.pending, (state) => {
        state.loading = true; 
      })
      .addCase(fetchOverviewAsync.fulfilled, (state, action) => {
        state.loading = false; 
        state.overviews = action.payload;  
      })
      .addCase(fetchOverviewAsync.rejected, (state, action) => {
        state.loading = false;  
        state.error = action.error.message; 
      });
  },
});


export default overviewSlice.reducer;
