import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../redux/moviesSlice/moviesSlice';
import { useEffect } from 'react';

const useTopRatedMovies = () => {

    const dispatch = useDispatch()

    const fetchTopRatedMovies = async () =>{
        try {
          const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${String(import.meta.env.VITE_TMDB_API_KEY)}&page=1`);
          const json = await data.json();
          dispatch(addTopRatedMovies(json.results))
          
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(()=>{
        fetchTopRatedMovies();
      },[])
}

export default useTopRatedMovies
