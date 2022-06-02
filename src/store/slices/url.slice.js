import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const urlSlice = createSlice({
		name: 'url',
    initialState: null,
    reducers: {
        type: (state,action)=>action.payload
    }
})
export const { type } = urlSlice.actions;

export default urlSlice.reducer;