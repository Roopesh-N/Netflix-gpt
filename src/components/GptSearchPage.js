import React from 'react'
import GptSearchBar from './GptSearchBar'
import { NetflixBg } from '../utils/constants'
import GptSuggestions from './GptSuggestions'

const GptSearchPage = () => {

  return (
    <div>
        <div className="fixed inset-0 -z-20">
            <img className="object-cover object-center h-full w-full" src={NetflixBg} alt="bg-logo"/>
        </div>
        <GptSearchBar />
        <GptSuggestions/>

    </div>
  )
}

export default GptSearchPage