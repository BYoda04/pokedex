import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
		name: 'counter',
    initialState: 0,
    reducers: {
        pressA: state=>state+1,
        choiceGener: state=>state=8,
        election: state=>state=9,
        resetCounter: state=>state=0
    }
})
export const { pressA,choiceGener,election,resetCounter,increment,decrement } = counterSlice.actions;

export default counterSlice.reducer;