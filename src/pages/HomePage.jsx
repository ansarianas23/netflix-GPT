import React from 'react'
import VideoContainer from '../components/VideoContainer';
import MovieRow from '../components/MovieRow';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MovieContainer from '../components/MovieContainer';
import useNowPopularMovies from '../hooks/useNowPopularMovies';

const HomePage = () => {

  useNowPlayingMovies();
  useNowPopularMovies();

  return (
    <div className='w-full min-h-screen'>
      <VideoContainer/>
      <MovieContainer/>
    </div>
  )
}

export default HomePage
