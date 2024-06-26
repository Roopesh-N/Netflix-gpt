import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/MovieSlice";
import { useEffect } from "react";
import { API_options } from "../utils/constants";


const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const popular=useSelector(store=>store.movie.PopularMovies);
    const get_movies_from_tmdb_api=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_options)
      const json=await data.json();
      dispatch(addPopularMovies(json.results));
    }
    useEffect(()=>{
      (!popular) && get_movies_from_tmdb_api();
  
    },[]);

}

export default usePopularMovies;