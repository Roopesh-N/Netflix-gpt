import React from 'react'
import MovieCard from './MovieCard'
import '../utils/custom.css';


const MoviesList = ({category,listOfMovies}) => {
    if (listOfMovies===null) return;

  return (
    <div className='pl-5 md:pl-16'>
        <h1 className='text-xl font-semibold py-4 text-white'>{category}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
            <div className='flex'>
                {listOfMovies.map((movie)=> <MovieCard key={movie.id} poster_path={movie["poster_path"]}/>)}
            </div>
        </div>
    </div>
  )
}

export default MoviesList