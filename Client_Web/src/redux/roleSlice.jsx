import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roleService from "../services/role";

const initialState = {
    roles: [],
    loading: false,
    error: null,
};

// Asenkron aksiyonlar
export const fetchRoles = createAsyncThunk('role/fetchRoles', async () => {
    const response = await roleService.get();
    return response;
});

export const addRole = createAsyncThunk('role/addRole', async (roleData) => {
    const response = await roleService.add(roleData);
    return response;
});

export const updateRole = createAsyncThunk('role/updateRole', async ({ id, name }) => {
    const response = await roleService.update(id, name);
    return { id, ...response };
});

export const deleteRole = createAsyncThunk('role/deleteRole', async (id) => {
    await roleService.deleted(id);
    return id;
});

const roleSlice = createSlice({
    name: 'role',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRoles.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRoles.fulfilled, (state, action) => {
                state.loading = false;
                state.roles = action.payload;
            })
            .addCase(fetchRoles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addRole.fulfilled, (state, action) => {
                state.loading = false;
                state.roles.push(action.payload);
            })
            .addCase(updateRole.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.roles.findIndex((role) => role._id === action.payload._id);
                if (index !== -1) {
                    state.roles[index] = action.payload;
                }
            })
            .addCase(deleteRole.fulfilled, (state, action) => {
                state.loading = false;
                state.roles = state.roles.filter((role) => role._id !== action.payload);
            });
    },
});

export default roleSlice.reducer;