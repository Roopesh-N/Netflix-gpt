import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openAI from '../utils/openAI';
import { API_options } from '../utils/constants';
import { addGptMovies } from '../utils/GptSlice';
import useGptSearch from '../Hooks/useGptSearch';
const GptSearchBar = () => {
  const searchText=useRef(null);
  const dispatch=useDispatch();
  const {gptsearch}=useGptSearch();

  const handlesearch=async()=>{
    if(searchText!==null){
    gptsearch(searchText.current.value);
    }
  }

const selectedLang=useSelector(store=>store.language.choosedLanguage)
  return (
    <div className='pt-[50%] md:pt-[15%] flex justify-center '>
        <form className='bg-black w-full md:w-1/2 grid grid-cols-12 rounded-sm' onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} type='text' placeholder={lang[selectedLang].gptSearchPlaceholder} className='p-4 m-4 col-span-9 rounded-sm' />
        <button className='bg-red-700 rounded-lg px-2 py-2 my-4 mx-3 col-span-3 text-xl hover:opacity-80' onClick={handlesearch} >{lang[selectedLang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar