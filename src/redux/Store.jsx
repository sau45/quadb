// store.js
import { configureStore } from '@reduxjs/toolkit';
import showReducer from './ShowSlice'



const store = configureStore({
    reducer: {
        data: showReducer
    }
});

export default store;
