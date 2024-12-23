import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import permissionServices from "../services/permission";

const initialState = {
    permissions: [],
    userPermissions: [],
    loading: false,
    error: null,
};

// Asenkron işlemler
export const fetchPermissions = createAsyncThunk('permissions/fetchPermissions', async (_, thunkAPI) => {
    try {
        const response = await permissionServices.get();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const fetchPermissionsByUser = createAsyncThunk('permissions/fetchPermissionsByUser', async (id, thunkAPI) => {
    try {
        const response = await permissionServices.byUser(id);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const addPermission = createAsyncThunk('permissions/addPermission', async (data, thunkAPI) => {
    try {
        const response = await permissionServices.add(data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updatePermission = createAsyncThunk('permissions/updatePermission', async ({ id, data }, thunkAPI) => {
    try {
        const response = await permissionServices.update(id, data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const permissionSlice = createSlice({
    name: 'permissions',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPermissions.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPermissions.fulfilled, (state, action) => {
                state.loading = false;
                state.permissions = action.payload;
            })
            .addCase(fetchPermissions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchPermissionsByUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPermissionsByUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userPermissions = action.payload;
            })
            .addCase(fetchPermissionsByUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(addPermission.fulfilled, (state, action) => {
                state.loading = false;
                state.permissions.push(action.payload);
            })

            .addCase(updatePermission.fulfilled, (state, action) => {
                state.permissions = state.permissions.data.map(permission => 
                    permission._id === action.payload._id 
                        ? { ...permission, permission_status: action.payload.permission_status } 
                        : permission
                );
            })
    },
});

export const { clearError } = permissionSlice.actions;
export default permissionSlice.reducer;