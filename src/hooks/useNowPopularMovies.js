import { useDispatch, useSelector } from 'react-redux';
import { addNowPopularMovies } from '../redux/moviesSlice/moviesSlice';
import { useEffect } from 'react';

const useNowPopularMovies = () => {

    const dispatch = useDispatch()

    const popularMovies = useSelector((store) => store.movies.NowPopularMovies);

    const fetchNowPopularMovies = async () =>{
        try {
          const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${String(import.meta.env.VITE_TMDB_API_KEY)}&page=1`);
          const json = await data.json();
          dispatch(addNowPopularMovies(json.results))
          
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(()=>{
        !popularMovies && fetchNowPopularMovies();
      },[])
}

export default useNowPopularMovies
