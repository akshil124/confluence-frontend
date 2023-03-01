import { configureStore } from '@reduxjs/toolkit';
import userReducer from './organization/organizationSlice';
import upiReducer from './cashFree/cashFreeSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        Upi: upiReducer
    }
});
