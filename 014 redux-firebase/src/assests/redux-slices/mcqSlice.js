import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: []
}


export const mcqSlice = createSlice({
    name: 'mcqs',
    initialState,
    reducers: {
        setDetails:(state,actions)=>{
            state.value = actions.payload
        }
    }
});

export const {setDetails} = mcqSlice.actions;

export default mcqSlice.reducer