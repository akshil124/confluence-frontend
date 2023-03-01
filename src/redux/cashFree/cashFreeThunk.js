import { createAsyncThunk } from '@reduxjs/toolkit';
import { createOrderForOrganization, orderPayUrl } from '../../query/cashFreeUpiQuery';
import request from '../../request';

export const createOrderUpi = createAsyncThunk(
    'create CashFree Order',
    async ({ data, onCreateOrder }) => {
        const response = await request({ variables: data, query: createOrderForOrganization, operationName: 'CashFreeMutation' });
        if (response?.data?.data) {
            onCreateOrder();
        }
        return response;
    }
);

export const createOrderPayUrl = createAsyncThunk(
    'create CashFree Order pay url',
    async ({ data, onCreateOrder }) => {
        const response = await request({ variables: data, query: orderPayUrl, operationName: 'orderPay' });
        if (response?.data?.data) {
            onCreateOrder();
        }
        return response;
    }
);
