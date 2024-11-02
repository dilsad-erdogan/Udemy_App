import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos: [],
    totalQuantity: 0,
    totalPrice: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const itemIndex = state.videos.find((item) => item._id === newItem._id);
            if(itemIndex) {
                itemIndex.quantity++;
                itemIndex.totalPrice += newItem.totalPrice;
            } else {
                state.videos.push({
                    _id: newItem._id,
                    title: newItem.title,
                    description: newItem.description,
                    teacher: newItem.teacher,
                    price: newItem.price,
                    video_png: newItem.video_png,
                    video_url: newItem.video_url,
                    totalPrice: newItem.price
                })
            }

            state.totalPrice += newItem.price;
            state.totalQuantity++;
        },

        removeFromCart(state, action) {
            const id = action.payload;
            const findItem = state.videos.find((item) => item._id === id);
            if(findItem) {
                state.totalPrice -= findItem.totalPrice;
                state.totalQuantity--;
                state.videos = state.videos.filter(item => item._id !== id);
            }
        }
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer