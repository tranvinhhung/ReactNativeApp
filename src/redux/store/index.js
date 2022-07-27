import { combineReducers, configureStore } from '@reduxjs/toolkit';

import testReducer from './../reducers/testReducer';

const rootReducer = combineReducers({
  testReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
