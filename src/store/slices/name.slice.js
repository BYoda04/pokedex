import { createSlice } from '@reduxjs/toolkit';

export const nameSlice = createSlice({
	name: 'nameUser',
    initialState: "",
    reducers: {
        user: (state,action)=>action.payload
    }
})
export const { user } = nameSlice.actions;

export default nameSlice.reducer;