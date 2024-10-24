import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import videoSlice from "./videoSlice";
import messageSlice from "./messageSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        video: videoSlice,
        message: messageSlice
    }
});

export default store;