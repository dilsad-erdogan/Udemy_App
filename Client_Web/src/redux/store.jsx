import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        video: videoSlice
    }
});

export default store;