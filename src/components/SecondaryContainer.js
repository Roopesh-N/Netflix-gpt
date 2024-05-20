import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies=useSelector((store)=>store.movie);
  return (
    <div className='bg-black'>
      <div className='-mt-28 md:-mt-72 relative z-20'>
      <MoviesList category={"Now Playing"} listOfMovies={movies.NowPlaying}/>
      <MoviesList category={"Top Rated"} listOfMovies={movies.TopRatedMovies}/>
      <MoviesList category={"Popular"} listOfMovies={movies.PopularMovies}/>
      <MoviesList category={"Upcoming Movies"} listOfMovies={movies.UpcomingMovies}/>
      </div>
      
      {/* 
      Movie List - popular
      Movie List - Now Playing
      Movie List- Trending
       */}

    </div>
  )
}

export default SecondaryContainer