
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


/**
 * Async thunk that fetch the autenticated user
 */
export const fetchUser = createAsyncThunk(
    'user/fetch', 
    async () => {
        try {
            const response = await axios.get('/api/v1/auth/success', { withCredentials: true });
            const user = response.data.authenticatedUser;
            return user;
        }
        catch (err) {
            return err;
        };
});


/**
 * Async thunk that signout the autenticated user
 */
export const signoutUser = createAsyncThunk(
    'user/signout',
    async () => {
        try {
            await axios.get('/api/v1/auth/signout', { withCredentials: true });
        }
        catch (err) {
            return err;
        };
});


/**
 * Auth Slice
 */
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUser.pending, (state) => {
            state.isFetching = true;
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.isFetching = false;
            state.user = action.payload;
        })
        .addCase(signoutUser.fulfilled, (state, action) => {
            state.user = null;
        })
    }
});


export default authSlice.reducer;