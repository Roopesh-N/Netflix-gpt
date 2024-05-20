import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/MovieSlice";
import { useEffect } from "react";
import { API_options } from "../utils/constants";


const useTopRatedMovies=()=>{
    const dispatch=useDispatch();

    const get_movies_from_tmdb_api=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_options)
      const json=await data.json();
      dispatch(addTopRatedMovies(json.results));
    }
    useEffect(()=>{
      get_movies_from_tmdb_api();
  
    },[]);
}

export default useTopRatedMovies;