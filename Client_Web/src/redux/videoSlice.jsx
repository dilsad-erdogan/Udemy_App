import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos: [],
    searchTerm: '',
    filteredData: []
};

const videoSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        setVideos(state, action) {
            state.videos = action.payload
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload
            state.filteredData = state.videos.filter(data => data.name.toLowerCase().includes(state.searchTerm.toLowerCase()))
        }
    },
});

export const { setVideos, setSearchTerm } = videoSlice.actions;
export default videoSlice.reducer