import React from 'react'
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';

const GptSuggestions = () => {
  const {gptmoviesnames,gptMovies}=useSelector(store=>store.GptSearch);
  if(!gptmoviesnames) return  null;
  return (
    <div className='pt-4 m-5 mt-20 bg-black text-white opacity-90 rounded-lg'>
      <div>
        {gptmoviesnames.map((moviename,index)=><MoviesList key={index} category={moviename} listOfMovies={gptMovies[index].results}/>)}
      </div>
    </div>
  )
}

export default GptSuggestions