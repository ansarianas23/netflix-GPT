import React from 'react'
import MovieRow from './MovieRow'
import { useSelector } from 'react-redux';

const MovieContainer = () => {
  const movies = useSelector((state)=>state.movies);

  return (
    <div className='w-full h-fit'>
      <div className='flex flex-col pl-4 relative z-20 mt-0 lg:-mt-64'>
        <MovieRow title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieRow title={"Popular"} movies={movies.NowPopularMovies}/>
        <MovieRow title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieRow title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieRow title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieRow/>
        <MovieRow/>
      </div>
    </div>
  )
}

export default MovieContainer;
