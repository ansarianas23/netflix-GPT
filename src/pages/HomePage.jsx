import React from 'react'
import VideoContainer from '../components/VideoContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MovieContainer from '../components/MovieContainer';
import useNowPopularMovies from '../hooks/useNowPopularMovies';
import useTopRatedMovies from '../hooks/useTopratedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const HomePage = () => {

  useNowPlayingMovies();
  useNowPopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className='w-full min-h-screen'>
      <VideoContainer/>
      <MovieContainer/>
    </div>
  )
}

export default HomePage
