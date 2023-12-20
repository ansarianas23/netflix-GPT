import React from 'react'
import { TMDB_MOVIE_IMAGE_URL } from '../utils/constans'

const MovieCard = ({ posterPath }) => {
  // console.log(movieDetails)
  return (
    <div className='w-36 cursor-pointer hover:scale-110 delay-75 ease-in-out transition-all'>
      <img className='w-full h-auto' src={TMDB_MOVIE_IMAGE_URL+posterPath} alt="movie-card" />
    </div>
  )
}

export default MovieCard
