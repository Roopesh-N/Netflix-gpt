import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const Movies=useSelector((store)=>store.movie?.NowPlaying);
    if (Movies===null)return;
    const movie=Movies[0];
    const {original_title,overview,id}=movie;
  return (
    <div className=''>
        <div>
        <VideoTitle title={original_title} overview={overview} />
        </div>
        <VideoBackground movieID={id}/>
    </div>
  )
}

export default MainContainer