import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux-slices/userSlice";
import cartSlice from "../redux-slices/cartSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        cart:cartSlice
    }
});