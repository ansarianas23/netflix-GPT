import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import MovieInfo from './MovieInfo';


const VideoContainer = () => {

  const movies = useSelector((state)=> state.movies?.nowPlayingMovies);
  
  if(movies === null) return;

  // random movie id based on wich trailer will be fetched
  const randomMovie = movies[Math.floor(Math.random() * 20)];

  const { id, original_title, overview } = randomMovie

  return (
    <div className='w-screen h-fit relative'>
      {/* video container */}
      <VideoBackground
      movieId={id}/>

      {/* info div */}
      <MovieInfo
      original_title={original_title}
      overview={overview}
      />
    </div>
    
  )
}

export default VideoContainer
