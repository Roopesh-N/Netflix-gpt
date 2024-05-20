import { createSlice } from "@reduxjs/toolkit";

const MovieSlice=createSlice({
    name:"Movie",
    initialState:{
        NowPlaying:null,
        TrailerVideo:null,
        TopRatedMovies:null,
        UpcomingMovies:null,
        PopularMovies:null,
    },

    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlaying=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.TrailerVideo=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },


    }
})

export const {addNowPlayingMovies, addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=MovieSlice.actions;
export default MovieSlice.reducer;