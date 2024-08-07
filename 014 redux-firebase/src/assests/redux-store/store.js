import { configureStore } from "@reduxjs/toolkit";
import mcqSlice from "../redux-slices/mcqSlice";
import userSlice from "../redux-slices/userSlice";
// import productSlice from "../redux-slices/productSlice";

// const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    reducer: {
        // product:productSlice,
        mcqs: mcqSlice,
        user: userSlice
    }
});