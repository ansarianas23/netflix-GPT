import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import MovieInfo from './MovieInfo';


const VideoContainer = () => {

  const movies = useSelector((state)=> state.movies.nowPlayingMovies);
  // console.log(movies);
  
  if(movies === null) return;

  // random movie id based on wich trailer will be fetched
  // const { id, original_title, overview } = movies[Math.floor(Math.random() * 20)]
  const mainMovie = movies[Math.floor(Math.random() * 20)];

  // this data is coming fine and passing forward fine
  const { id, original_title, overview } = mainMovie
  // console.log(id, original_title, overview)


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
