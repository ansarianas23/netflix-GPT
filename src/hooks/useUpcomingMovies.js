import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../redux/moviesSlice/moviesSlice';
import { useEffect } from 'react';

const useUpcomingMovies = () => {

    const dispatch = useDispatch()

    const fetchUpcomingMovies = async () =>{
        try {
          const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${String(import.meta.env.VITE_TMDB_API_KEY)}&page=1`);
          const json = await data.json();
          dispatch(addUpcomingMovies(json.results))
          
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(()=>{
        fetchUpcomingMovies();
      },[])
}

export default useUpcomingMovies
