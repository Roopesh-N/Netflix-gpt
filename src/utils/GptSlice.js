import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:"GptSearch",
    initialState:{
        doSearch:false,
        gptMovies:null,
        gptmoviesnames:null,
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.doSearch=!state.doSearch
        },
        addGptMovies:(state,action)=>{
            const {movieresults,movienames}=action.payload;
            state.gptMovies=movieresults;
            state.gptmoviesnames=movienames;
        }
    }
})

export const {toggleGptSearch,addGptMovies}=GptSlice.actions;
export default GptSlice.reducer;