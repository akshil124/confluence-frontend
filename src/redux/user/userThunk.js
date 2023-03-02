import { createAsyncThunk } from '@reduxjs/toolkit';
import { NEW_USER } from '../../../src/query';
import { client } from '../../index';
// First, create the thunk
export const fetchUserById = createAsyncThunk(
    'create users',
    async (data) => {
        const response = await client.query({
            query: NEW_USER,
            variables: {
                name: '$name', role: '$role', position: '$position', status: '$status', gender: '$gender', number: '$number'
            }
        });
        return response;
    }
);
