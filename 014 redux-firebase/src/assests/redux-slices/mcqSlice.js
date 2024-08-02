import { createSlice } from "@reduxjs/toolkit"
import { child, get, getDatabase, ref } from "firebase/database";
import { firebaseApp } from "../firebase-config/firebaseConfig";

const initialState = {
    value: []
}


export const mcqSlice = createSlice({
    name: 'mcqs',
    initialState,
    reducers: {
        getData: async(state) => {
            const db = getDatabase(firebaseApp);
            const dbRef = ref(db);

            const snapshot =await get(child(dbRef, 'mcqs'));
            if(snapshot.exists()){
              const data =  Object.entries(snapshot.val()).map(([id, user])=>({id, ...user}));

              console.log(data);
            }
            else{
                console.log("No data available");
            }
            // console.log(response);
        }
    }
});

export const {getData} = mcqSlice.actions;

export default mcqSlice.reducer