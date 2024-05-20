import { useEffect } from 'react'
import { addTrailerVideo } from '../utils/MovieSlice';
import { API_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';

const useMovieTrailer = (movieID) => {
    const dispatch=useDispatch();
    const movieTrailer=useSelector(store=>store.movie.TrailerVideo)
    
    const getMovieVideos=async()=>{
      const videosdata= await fetch("https://api.themoviedb.org/3/movie/"+ movieID +"/videos?language=en-US", API_options);
      const json=await videosdata.json();
      const filteredVideos=json.results.filter((video)=>video.type==="Trailer");
      const Trailer=filteredVideos.length?filteredVideos[0] : json.results[0];
      
      dispatch(addTrailerVideo(Trailer))
    }
    useEffect(()=>{
      (!movieTrailer) && getMovieVideos();
    },[]);
}

export default useMovieTrailer