import React from 'react'
import MovieCard from './MovieCard'

const MovieRow = ({title , movies}) => {
  
  return (
  <div className="px-6">
    {/* Row title */}
    <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>

    {/* Row cards */}
    <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide">
      <div className="flex space-x-4 bg-transparent">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} posterPath={movie.poster_path} />
      ))}</div>
    </div>
</div>

  )
}

export default MovieRow
