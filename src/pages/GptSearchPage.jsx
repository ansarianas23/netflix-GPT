import React from 'react'
import GptSearchBar from '../components/GptSearchBar'
import MovieRow from "../components/MovieRow"
import { useDispatch, useSelector } from 'react-redux';
import { removeGptMoviesResults } from '../redux/moviesSlice/moviesSlice';

const GptSearchPage = () => {

  const {nowPlayingMovies, NowPopularMovies, TopRatedMovies, UpcomingMovies, GptMoviesResults} = useSelector((state)=>state.movies);
  // console.log("final gpt movoes s", GptMoviesResults)

  const dispatch = useDispatch()

  return (
    <div className='w-full min-h-screen bg-hero'>
      <div className='max-w-[80%] lg:max-w-[50%] mx-auto pt-20'> 
        <GptSearchBar/>
      </div>

      <div className='bg-black bg-opacity-80 pb-10 mt-10 relative mx-3'>
        <button className='text-white m-5 bg-netflix-red px-2 py-1 rounded-md absolute right-0' onClick={()=>{dispatch(removeGptMoviesResults())}}>Clear results</button>
        {/*Movie List will be here  */}
        <MovieRow
        title={GptMoviesResults?.length ? "Your Search Results" : "Search Something"}
        movies={GptMoviesResults}
        />
      </div>

      {/* gradiant wrapper div */}
      {/* <div className='h-full w-full bg-black absolute z-50'>
      </div> */}
    </div>
  )
}

export default GptSearchPage
