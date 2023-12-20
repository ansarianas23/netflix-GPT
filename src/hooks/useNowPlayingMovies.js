import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../redux/moviesSlice/moviesSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {

    const dispatch = useDispatch()

    const fetchMoviesNowPlaying = async () =>{
        try {
          const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=1`);
          const json = await data.json();
          // console.log(json.results); 
          dispatch(addNowPlayingMovies(json.results))
          
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(()=>{
        fetchMoviesNowPlaying();
      },[])
}

export default useNowPlayingMovies
