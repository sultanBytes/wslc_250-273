import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux-slices/productSlice";

// const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    reducer: {
        product:productSlice
    }
});