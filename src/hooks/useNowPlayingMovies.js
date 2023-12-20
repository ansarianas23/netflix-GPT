import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../redux/moviesSlice/moviesSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constans';

const useNowPlayingMovies = () => {

    const dispatch = useDispatch()

    const fetchMoviesNowPlaying = async () =>{
        try {
          const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${String(import.meta.env.VITE_TMDB_API_KEY)}&page=1`);
          // const data = fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
          const json = await data.json();
          dispatch(addNowPlayingMovies(json.results))
          // console.log("data is",data.results)
          // console.log(json.results); 
          
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(()=>{
        fetchMoviesNowPlaying();
      },[])
}

export default useNowPlayingMovies
