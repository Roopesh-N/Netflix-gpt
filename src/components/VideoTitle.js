import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black '>
        <h1 className='text-4xl font-semibold'>{title}</h1>
        <p className='w-1/4 my-3 text-md'>{overview}</p>
        <button className='bg-white p-2 rounded-md px-8 my-1 text-black text-xl hover:bg-opacity-75'> ▶Play</button>
        <button className='bg-gray-400 p-2 rounded-md bg-opacity-40 text-xl mx-2'>More info</button>
    </div>
  )
}

export default VideoTitle