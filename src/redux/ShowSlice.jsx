import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    showdata: null,
    status:true
  }
  

const ShowSlice = createSlice({
    name: 'show',
    initialState,
    reducers: {
      setShowData(state, action) {
        state.showdata= action.payload;
      },
      setNotVisibleButton(state,action){
        state.status=action.payload;
      }
    }
  });
  
  export const { setShowData ,setNotVisibleButton} = ShowSlice.actions;
  export default ShowSlice.reducer;