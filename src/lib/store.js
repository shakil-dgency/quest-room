import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './features/locationSlice'
import gameReducer from './features/gameSlice';


export const makeStore = () => {
  return configureStore({
    reducer: {
      location: locationReducer,
      games: gameReducer
    },
  });
};