import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import videoServices from "../services/video";

const initialState = {
    videos: [],
    userVideos: [],
    loading: false,
    error: null,
};

// Asenkron işlemler
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async (_, thunkAPI) => {
    try {
        const response = await videoServices.get();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const fetchVideosByUser = createAsyncThunk('videos/fetchVideosByUser', async (id, thunkAPI) => {
    try {
        const response = await videoServices.byUser(id);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const fetchVideoById = createAsyncThunk('videos/fetchVideoById', async (id, thunkAPI) => {
    try {
        const response = await videoServices.byVideo(id);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const addVideo = createAsyncThunk('videos/addVideo', async (data, thunkAPI) => {
    try {
        const response = await videoServices.add(data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const deleteVideo = createAsyncThunk('videos/deleteVideo', async (id, thunkAPI) => {
    try {
        await videoServices.deleted(id);
        return { id };
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateVideoTitle = createAsyncThunk('videos/updateVideoTitle', async ({ id, data }, thunkAPI) => {
    try {
        const response = await videoServices.updateTitle(id, data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateVideoDescription = createAsyncThunk('videos/updateVideoDescription', async ({ id, data }, thunkAPI) => {
    try {
        const response = await videoServices.updateDescription(id, data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateVideoPng = createAsyncThunk('videos/updateVideoPng', async ({ id, data }, thunkAPI) => {
    try {
        const response = await videoServices.updatePng(id, data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateVideoUrl = createAsyncThunk('videos/updateVideoUrl', async ({ id, data }, thunkAPI) => {
    try {
        const response = await videoServices.updateUrl(id, data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateVideoPrice = createAsyncThunk('videos/updateVideoPrice', async ({ id, data }, thunkAPI) => {
    try {
        const response = await videoServices.updatePrice(id, data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const videoSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.loading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchVideosByUser.fulfilled, (state, action) => {
                state.loading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideoById.fulfilled, (state, action) => {
                state.loading = false;
                state.userVideos = action.payload;
            })
            .addCase(deleteVideo.fulfilled, (state, action) => {
                state.videos = state.videos.filter(video => video._id !== action.payload._id);
            })
            .addCase(updateVideoTitle.fulfilled, (state, action) => {
                const index = state.videos.findIndex(video => video._id === action.payload._id);
                if (index !== -1) {
                    state.videos[index].title = action.payload.title;
                }
            })
            .addCase(updateVideoDescription.fulfilled, (state, action) => {
                const index = state.videos.findIndex(video => video._id === action.payload._id);
                if (index !== -1) {
                    state.videos[index].description = action.payload.description;
                }
            })
            .addCase(updateVideoPng.fulfilled, (state, action) => {
                const index = state.videos.findIndex(video => video._id === action.payload._id);
                if (index !== -1) {
                    state.videos[index].video_png = action.payload.video_png;
                }
            })
            .addCase(updateVideoUrl.fulfilled, (state, action) => {
                const index = state.videos.findIndex(video => video._id === action.payload._id);
                if (index !== -1) {
                    state.videos[index].video_url = action.payload.video_url;
                }
            })
            .addCase(updateVideoPrice.fulfilled, (state, action) => {
                const index = state.videos.findIndex(video => video._id === action.payload._id);
                if (index !== -1) {
                    state.videos[index].price = action.payload.price;
                }
            });
    },
});

export const { clearError } = videoSlice.actions;
export default videoSlice.reducer;