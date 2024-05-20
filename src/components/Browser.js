import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';


const Browser = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const GptSearch=useSelector(store=>store.GptSearch?.doSearch)

  return (
    <div>
      <Header/>
      {
        (GptSearch) ? <GptSearchPage/> : 
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      }
      
      {/* {
        Maincontainer
          -VideoBackground
          -video Title
        secondary container
          -MovieList *n
            -cards*n
      } */}
    </div>
  )
}

export default Browser