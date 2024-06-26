import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";
import { API_options } from "../utils/constants";


const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const nowPlaying=useSelector(store=>store.movie.NowPlaying);

    const get_movies_from_tmdb_api=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options)
      const json=await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
  
    useEffect(()=>{
      (!nowPlaying) && get_movies_from_tmdb_api();
  
    },[]);

}

export default useNowPlayingMovies;