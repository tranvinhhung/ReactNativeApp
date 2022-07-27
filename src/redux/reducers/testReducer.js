import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import apiCall from './../../api/getData';

export const handleTestApi = createAsyncThunk(
  'testapi/ne',
  async (data, thunkAPI) => {
    let predat = thunkAPI;
    // console.log('eeeeeeee');
    let datane = await apiCall.getData('/manga');
    console.log(datane);
  },
);
const testReducer = createSlice({
  name: 'testReducer',
  initialState: {
    message: 'thử test reducer',
    isFindData: false,
    data: [],
  },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
  extraReducers: {
    [handleTestApi.fulfilled]: (state, action) => {
      if (action.payload) {
        state.data = [...action.payload];
        state.isFindData = false;
      }
    },
    [handleTestApi.pending]: (state, action) => {
      state.isFindData = true;
    },
    [handleTestApi.rejected]: (state, action) => {
      state.isFindData = false;
    },
  },
});

export const {setMessage} = testReducer.actions;
export default testReducer.reducer;
