import React from 'react'
import {useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer';


const VideoBackground = ({movieID}) => {

  useMovieTrailer(movieID);
  const MovieTrailer=useSelector((store)=>store.movie?.TrailerVideo);

  return (
    <div>
      <iframe
      className='w-screen aspect-video' 
      src={"https://www.youtube.com/embed/" + MovieTrailer?.key + "?&autoplay=1&mute=1&loop=1"}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

      </iframe>
    </div>
  )
}

export default VideoBackground