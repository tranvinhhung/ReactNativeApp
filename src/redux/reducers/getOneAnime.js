import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiCall from './../../api/getData';

export const handleGetOneAnime = createAsyncThunk(
  'get/oneAnime',
  async (data, thunkAPI) => {
    let predat = thunkAPI;
    // console.log('eeeeeeee');
    let datane = await apiCall.getOneAnime(data);
    console.log(datane);
  },
);
const getOneAnimeReducer = createSlice({
  name: 'getOneAnimeReducer',
  initialState: {
    message: 'getOneAnime',
    isFindData: false,
    data: [],
  },
  reducers: {
    
  },
  extraReducers: {
    [handleGetOneAnime.fulfilled]: (state, action) => {
      if (action.payload) {
        state.data = [...action.payload];
        state.isFindData = false;
      }
    },
    [handleGetOneAnime.pending]: (state, action) => {
      state.isFindData = true;
    },
    [handleGetOneAnime.rejected]: (state, action) => {
      state.isFindData = false;
    },
  },
});

export const {} = getOneAnimeReducer.actions;
export default getOneAnimeReducer.reducer;
