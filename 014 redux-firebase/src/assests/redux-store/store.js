import { configureStore } from "@reduxjs/toolkit";
import mcqSlice from "../redux-slices/mcqSlice";
// import productSlice from "../redux-slices/productSlice";

// const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    reducer: {
        // product:productSlice,
        mcqs: mcqSlice
    }
});