import { createSlice } from '@reduxjs/toolkit';
import { createOrderUpi, createOrderPayUrl } from './cashFreeThunk';
import { toast } from 'react-toastify';

const initialState = {
    userInfo: []
};

export const cashFreeSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrderUpi.pending, (state, action) => {

            });
        builder
            .addCase(createOrderUpi.fulfilled, (state, action) => {
                if (action.payload?.data?.data) {
                    localStorage.setItem('session', JSON.stringify(action.payload?.data?.data?.createOrder));
                }
                if (action.payload?.data.errors?.length && action.payload?.data?.errors[0]?.message) {
                    toast.error(action.payload?.data?.errors[0]?.message);
                }
            });
        builder
            .addCase(createOrderUpi.rejected, (state, action) => {
                if (action.payload?.data.errors?.length && action.payload?.data?.errors[0]?.message) {
                    toast.error(action.payload?.data?.errors[0]?.message);
                }
            });
        builder
            .addCase(createOrderPayUrl.pending, (state, action) => {

            });
        builder
            .addCase(createOrderPayUrl.fulfilled, (state, action) => {
                if (action.payload?.data?.data) {
                    localStorage.setItem('session', JSON.stringify(action.payload?.data?.data?.createOrder));
                }
                if (action.payload?.data.errors?.length && action.payload?.data?.errors[0]?.message) {
                    toast.error(action.payload?.data?.errors[0]?.message);
                }
            });
        builder
            .addCase(createOrderPayUrl.rejected, (state, action) => {
                if (action.payload?.data.errors?.length && action.payload?.data?.errors[0]?.message) {
                    toast.error(action.payload?.data?.errors[0]?.message);
                }
            });
    }
});

export default cashFreeSlice.reducer;
