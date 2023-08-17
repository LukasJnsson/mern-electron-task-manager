
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


/**
 * Async thunk that fetch the tasks created by the autenticated user
 */
export const fetchTasks = createAsyncThunk(
    'tasks/fetch', 
    async (_id) => {
        try {
            const response = await axios.get('/api/v1/tasks', { headers: { '_id': _id }});
            return response.data;
        }
        catch (err) {
            return err;
        };
});


/**
 * Async thunk that create a task
 */
export const createTask = createAsyncThunk(
    'tasks/create',
    async (task, { rejectWithValue }) => {
        try {
            await axios.post('/api/v1/tasks', task);
        }
        catch (err) {
            return rejectWithValue(err.response.data.message);
        };
});


/**
 * Async thunk that updates a task
 */
export const updateTask = createAsyncThunk(
    'tasks/update',
    async (task, { rejectWithValue }) => {
        try {
            await axios.put(`/api/v1/tasks/${task._id}`, task);
        }
        catch (err) {
            return rejectWithValue(err.response.data.message);
        };
});


/**
 * Tasks Slice
 */
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: null,
        isFetching: true,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTasks.pending, (state) => {
            state.isFetching = true;
        })
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.isFetching = false;
            state.tasks = action.payload;
        })
        .addCase(fetchTasks.rejected, (state, action) => {
            state.isFetching = false;
            state.error = action.error.message;
        })
        .addCase(createTask.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(updateTask.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
});


export default tasksSlice.reducer;