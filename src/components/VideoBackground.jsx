import React from 'react'
import { useSelector } from 'react-redux';
import useTrailerDetails from '../hooks/useTrailerDetails';

const VideoBackground = ({ movieId }) => {

  const trailerVideo = useSelector((state)=>state.movies?.trailerDetail);
  // console.log("from redux store",trailerVideo);
  useTrailerDetails(movieId);

  return (
    <div className='w-screen aspect-video bg-gradient-to-b from-black'>
        <iframe 
        className='w-full aspect-video'
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&loop=1&mute=1&controls=0&showinfo=0"}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
      </div>
  )
}

export default VideoBackground
