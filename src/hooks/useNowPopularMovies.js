import { useDispatch } from 'react-redux';
import { addNowPopularMovies } from '../redux/moviesSlice/moviesSlice';
import { useEffect } from 'react';

const useNowPopularMovies = () => {

    const dispatch = useDispatch()

    const fetchNowPopularMovies = async () =>{
        try {
          const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=1`);
          const json = await data.json();
          dispatch(addNowPopularMovies(json.results))
          
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(()=>{
        fetchNowPopularMovies();
      },[])
}

export default useNowPopularMovies
