import { createSlice } from '@reduxjs/toolkit';

export const indexSlice = createSlice({
		name: 'index',
    initialState: 0,
    reducers: {
        increment: state=>state+4,
        decrement: state=>state-4,
        valueMin: state=>state=0,
        valueMax: state=>state=10224,
        skipRight: state=>state=10002,
        skipLeft: state=>state=896,
    }
})
export const { increment,decrement,valueMin,valueMax,skipLeft,skipRight } = indexSlice.actions;

export default indexSlice.reducer;