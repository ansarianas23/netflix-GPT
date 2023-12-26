import React from 'react'
import MovieRow from './MovieRow'
import { useSelector } from 'react-redux';

const MovieContainer = () => {
  const {nowPlayingMovies, NowPopularMovies, TopRatedMovies,UpcomingMovies} = useSelector((state)=>state.movies);

  return (
    <div className='w-full h-fit'>
      <div className='flex flex-col lg:pl-4 relative z-20 -mt-0 lg:-mt-[15%]'>
        <MovieRow title={"Now Playing"} movies={nowPlayingMovies}/>
        <MovieRow title={"Top Rated"} movies={TopRatedMovies}/>
        <MovieRow title={"Upcoming"} movies={UpcomingMovies}/>
        <MovieRow title={"Popular"} movies={NowPopularMovies}/>
      </div>
    </div>
  )
}

export default MovieContainer;
