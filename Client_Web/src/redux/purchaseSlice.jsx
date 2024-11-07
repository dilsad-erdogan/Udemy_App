import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mServices from "../services/purchase";

const initialState = {
    purchases: [],
    loading: false,
    error: null,
};

// Asenkron işlemler
export const fetchPurchases = createAsyncThunk('purchases/fetchPurchases', async (_, thunkAPI) => {
    try {
        const response = await mServices.get();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const fetchPurchasesByUser = createAsyncThunk('purchases/fetchPurchasesByUser', async (id, thunkAPI) => {
    try {
        const response = await mServices.byUser(id);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const addPurchase = createAsyncThunk('purchases/addPurchase', async (data, thunkAPI) => {
    try {
        const response = await mServices.add(data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const purchaseSlice = createSlice({
    name: 'purchases',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPurchases.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPurchases.fulfilled, (state, action) => {
                state.loading = false;
                state.purchases = action.payload;
            })
            .addCase(fetchPurchases.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchPurchasesByUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPurchasesByUser.fulfilled, (state, action) => {
                state.loading = false;
                state.purchases = action.payload;
            })
            .addCase(fetchPurchasesByUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(addPurchase.fulfilled, (state, action) => {
                state.loading = false;
                state.purchases.push(action.payload);
            })
    },
});

export const { clearError } = purchaseSlice.actions;
export default purchaseSlice.reducer;