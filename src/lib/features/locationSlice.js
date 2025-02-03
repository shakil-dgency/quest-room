import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: null,
  id:''
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation:(state, action)=>{

        state.location = action.payload.location,
        state.id = action.payload.id
    },
    
   
  },
});

// Export actions
export const { setLocation } = locationSlice.actions;

// Export reducer
export default locationSlice.reducer;