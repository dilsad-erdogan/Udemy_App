import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import liveServices from "../services/live";

const initialState = {
    liveData: null,
    userLiveData: null,
    liveDetail: null,
    loading: false,
    error: null,
};

// Asenkron işlemler
export const fetchLiveData = createAsyncThunk('live/fetchLiveData', async (_, thunkAPI) => {
    try {
        const response = await liveServices.get();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const fetchByUser = createAsyncThunk('live/fetchByUser', async (id, thunkAPI) => {
    try {
        const response = await liveServices.byUser(id);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const fetchByLive = createAsyncThunk('live/fetchByLive', async (id, thunkAPI) => {
    try {
        const response = await liveServices.byLive(id);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const addLive = createAsyncThunk('live/addLive', async (data, thunkAPI) => {
    try {
        const response = await liveServices.add(data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateLiveTitle = createAsyncThunk('live/updateLiveTitle', async ({ id, data }, thunkAPI) => {
    try {
        const response = await liveServices.updateTitle(id, data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateLiveDescription = createAsyncThunk('live/updateLiveDescription', async ({ id, data }, thunkAPI) => {
    try {
        const response = await liveServices.updateDescription(id, data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateLivePng = createAsyncThunk('live/updateLivePng', async ({ id, data }, thunkAPI) => {
    try {
        const response = await liveServices.updatePng(id, data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const deleteLive = createAsyncThunk('live/deleteLive', async (id, thunkAPI) => {
    try {
        const response = await liveServices.deleted(id);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const liveSlice = createSlice({
    name: 'live',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLiveData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLiveData.fulfilled, (state, action) => {
                state.loading = false;
                state.liveData = action.payload;
            })
            .addCase(fetchLiveData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchByUser.fulfilled, (state, action) => {
                state.userLiveData = action.payload;
            })

            .addCase(fetchByLive.fulfilled, (state, action) => {
                state.liveDetail = action.payload;
            })

            .addCase(addLive.fulfilled, (state, action) => {
                state.liveData = action.payload;
            })

            .addCase(updateLiveTitle.fulfilled, (state, action) => {
                state.liveData = state.liveData.data.map(live => 
                    live._id === action.payload._id 
                        ? { ...live, title: action.payload.title } 
                        : live
                );
            })

            .addCase(updateLiveDescription.fulfilled, (state, action) => {
                state.liveData = state.liveData.data.map(live => 
                    live._id === action.payload._id 
                        ? { ...live, description: action.payload.description } 
                        : live
                );
            })

            .addCase(updateLivePng.fulfilled, (state, action) => {
                state.liveData = state.videos.data.map(live => 
                    live._id === action.payload._id 
                        ? { ...live, video_png: action.payload.video_png } 
                        : live
                );
            })

            .addCase(deleteLive.fulfilled, (state) => {
                state.loading = false;
            })
    },
});

export const { clearError } = liveSlice.actions;
export default liveSlice.reducer;