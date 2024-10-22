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
                    videoUrl: newItem.videoUrl,
                    quantity: 1,
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
                state.totalQuantity -= findItem.quantity;
                state.videos = state.videos.filter(item => item._id !== id);
            }
        },

        decreaseQuantity(state, action) {
            const id = action.payload;
            const findItem = state.videos.find((item) => item._id === id);
            if(findItem) {
                if(findItem.quantity > 1){
                    findItem.quantity -= 1;
                    state.totalPrice -= findItem.price;
                    state.totalQuantity -= 1;
                }
            }
        },
        
        increaseQuantity(state, action) {
            const id = action.payload;
            const findItem = state.videos.find((item) => item._id === id);
            if(findItem) {
                findItem.quantity += 1;
                state.totalPrice += findItem.price;
                state.totalQuantity += 1;
            }
        }
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer