import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import MovieReducer from "./MovieSlice";
import GptSearchReducer from "./GptSlice";
import languageReducer from "./langSlice";

const appstore=configureStore({
    reducer:{
        user:userReducer,
        movie:MovieReducer,
        GptSearch:GptSearchReducer,
        language:languageReducer,
    }
})

export default appstore;
