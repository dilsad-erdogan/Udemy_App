import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import videoSlice from "./videoSlice";
import messageSlice from "./messageSlice";
import authSlice from "./authSlice";
import liveSlice from "./liveSlice";
import permissionSlice from "./permissionSlice";
import purchaseSlice from "./purchaseSlice";
import roleSlice from "./roleSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        message: messageSlice,
        auth: authSlice,
        live: liveSlice,
        permission: permissionSlice,
        purchase: purchaseSlice,
        role: roleSlice,
        user: userSlice,
        video: videoSlice
    }
});

export default store;