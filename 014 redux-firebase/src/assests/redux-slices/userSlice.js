import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:{}
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action)=>{
            state.value = action.payload
        }
    }
});

export const {setUserDetails} = userSlice.actions
export default userSlice.reducer

