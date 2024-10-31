import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/auth";

const initialState = {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
    twoFactorEnabled: false,
};

// Asenkron işlemler
export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        const response = await authService.register(userData);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        const response = await authService.login(userData);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const login2FA = createAsyncThunk('auth/login2FA', async (userData, thunkAPI) => {
    try {
        const response = await authService.login2FA(userData);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const verify2FA = createAsyncThunk('auth/verify2FA', async (userData, thunkAPI) => {
    try {
        const response = await authService.verify2FA(userData);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const forgot = createAsyncThunk('auth/forgot', async (userData, thunkAPI) => {
    try {
        const response = await authService.forgot(userData);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.twoFactorEnabled = false;
        }
    },
    extraReducers: (builder) => {
        builder
            // Register
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Login
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
                state.twoFactorEnabled = action.payload.twoFactorEnabled;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // 2FA Login
            .addCase(login2FA.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login2FA.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(login2FA.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // 2FA Verify
            .addCase(verify2FA.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(verify2FA.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(verify2FA.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Forgot Password
            .addCase(forgot.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(forgot.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(forgot.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;