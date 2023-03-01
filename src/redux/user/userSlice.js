import { createSlice } from '@reduxjs/toolkit';
import { fetchUserById } from './userThunk';

const initialState = {
    userInfo: [],
    entities: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userInfo = action.payload;
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            // Add user to the state array
            // state.entities.push(action.payload);
        });
    }
});
export const { addUser, extraReducers } = userSlice.actions;
export default userSlice.reducer;
