import React from 'react'
import { MoviePoster } from '../utils/constants'

const MovieCard = ({poster_path}) => {

  if(!poster_path) return null;

  return (
    <div className='w-48 pr-4 pb-5 rounded-xl'>
        <img src={MoviePoster + poster_path} alt='MoviePoster'/>
    </div>
  )
}

export default MovieCard