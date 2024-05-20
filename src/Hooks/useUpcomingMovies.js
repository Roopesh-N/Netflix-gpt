import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";
import { API_options } from "../utils/constants";


const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    const get_movies_from_tmdb_api=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_options)
      const json=await data.json();
      dispatch(addUpcomingMovies(json.results));
    }
    useEffect(()=>{
      get_movies_from_tmdb_api();
    },[]);
}

export default useUpcomingMovies;