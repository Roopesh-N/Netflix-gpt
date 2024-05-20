import { createSlice } from "@reduxjs/toolkit";


const langSlice= createSlice({
    name:"language",
    initialState:{
        choosedLanguage:"English"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.choosedLanguage=action.payload;
        },
    }
})

export const {changeLanguage}=langSlice.actions;
export default langSlice.reducer;