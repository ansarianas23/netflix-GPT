import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerDetail } from "../redux/moviesSlice/moviesSlice";
import { API_OPTIONS } from "../utils/constans";

// props id is movie id
const useTrailerDetails = (movieId) => {

    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies.trailerDetail);

    const fetchTrailer = async ()=>{
        // const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
        
        const json = await data.json();
  
        // by default trailer API gives us so many videos like teaser and songs of that movies we are only concern about trailer so filtering
        const filteredData = json?.results?.filter((video)=>{
          return video?.name === "Official Trailer"
        })

        // console.log(filteredData)
        const trailer = filteredData?.length ? filteredData[0] : json?.results[0];
        dispatch(addTrailerDetail(trailer));
      }

    useEffect(()=>{
        !trailerVideo && fetchTrailer();
    },[])

}

export default useTrailerDetails;
