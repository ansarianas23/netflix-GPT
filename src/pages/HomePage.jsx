import React from 'react'
import VideoContainer from '../components/VideoContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MovieContainer from '../components/MovieContainer';
import useNowPopularMovies from '../hooks/useNowPopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopratedMovies';

const HomePage = () => {

  useNowPlayingMovies();
  useNowPopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div className='w-full min-h-screen mb-5'>
      <VideoContainer/>
      <MovieContainer/>
    </div>
  )
}

export default HomePage
