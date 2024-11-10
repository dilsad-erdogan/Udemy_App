import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/user";

const initialState = {
    users: [],
    loading: false,
    error: null,
};

// Asenkron işlemler
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, thunkAPI) => {
    try {
        const response = await userService.get();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const fetchById = createAsyncThunk('users/fetchUserById', async (id, thunkAPI) => {
    try {
        const response = await userService.byId(id);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id, thunkAPI) => {
    try {
        await userService.deleted(id);
        return { id };
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateUserRole = createAsyncThunk('users/updateUserRole', async ({ id, data }, thunkAPI) => {
    try {
        const response = await userService.updateRole(id, data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateUserName = createAsyncThunk('users/updateUserName', async ({ id, data }, thunkAPI) => {
    try {
        const response = await userService.updateName(id, data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateUserEmail = createAsyncThunk('users/updateUserEmail', async ({ id, data }, thunkAPI) => {
    try {
        const response = await userService.updateEmail(id, data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateUserPassword = createAsyncThunk('users/updateUserPassword', async ({ id, data }, thunkAPI) => {
    try {
        const response = await userService.updatePassword(id, data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchById.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(deleteUser.fulfilled, (state) => {
                state.loading = false;
            })

            .addCase(updateUserRole.fulfilled, (state, action) => {
                state.users = state.users.data.map(user =>
                    user._id === action.payload._id
                    ? { ...user, role: action.payload.role }
                    : user
                );
            })
            .addCase(updateUserName.fulfilled, (state, action) => {
                state.users = state.users.data.map(user =>
                    user._id === action.payload._id
                    ? { ...user, name: action.payload.name }
                    : user
                );
            })
            .addCase(updateUserEmail.fulfilled, (state, action) => {
                state.users = state.users.data.map(user =>
                    user._id === action.payload._id
                    ? { ...user, email: action.payload.email }
                    : user
                );
            })
            .addCase(updateUserPassword.fulfilled, (state, action) => {
                state.users = state.users.data.map(user =>
                    user._id === action.payload._id
                    ? { ...user, password: action.payload.password }
                    : user
                );
            });
    },
});

export const { clearError } = userSlice.actions;
export default userSlice.reducer;