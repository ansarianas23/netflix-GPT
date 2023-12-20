import React from 'react'
import MovieRow from './MovieRow'
import { useSelector } from 'react-redux';

const MovieContainer = () => {
  const movies = useSelector((state)=>state.movies);

  return (
    <div className='w-full h-fit'>
      <div className='flex flex-col pl-4 relative z-20 -mt-0 lg:-mt-[15%]'>
        <MovieRow title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieRow title={"Top Rated"} movies={movies.TopRatedMovies}/>
        <MovieRow title={"Upcoming"} movies={movies.UpcomingMovies}/>
        <MovieRow title={"Popular"} movies={movies.NowPopularMovies}/>
      </div>
    </div>
  )
}

export default MovieContainer;
