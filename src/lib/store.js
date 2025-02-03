import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './features/locationSlice'


export const makeStore = () => {
  return configureStore({
    reducer: {
      location: locationReducer
    },
  });
};