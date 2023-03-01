import { createAsyncThunk } from '@reduxjs/toolkit';
import { createOrganizationQuery } from '../../query/organizationQuery';
import request from '../../request';

export const createOrganization = createAsyncThunk(
    'create Organization',
    async ({ data, onCreateOrganization }) => {
        const response = await request({ variables: data, query: createOrganizationQuery, operationName: 'OrganizationMutation' });
        if (response?.data?.data) {
            onCreateOrganization();
        }
        return response;
    }
);
