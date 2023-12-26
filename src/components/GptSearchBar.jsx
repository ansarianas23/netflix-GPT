import React, { useRef, useState } from 'react'
// import openai from "../utils/openai"
import { useDispatch, useSelector } from 'react-redux';
import { addGptMoviesResults } from '../redux/moviesSlice/moviesSlice';
import { API_OPTIONS } from '../utils/constans';

const GptSearchBar = () => {

  const [serachText, setSerachText] = useState("");
  const dispatch = useDispatch();
  
  const gptQuery = "behave this as a movie search model Query: "+ serachText +". and give names of 5 movies that matches query give me result like this Example: golmaal 3, phor hera pheri, dhoom 3, don, pathaan"

  // GPT API Function
  // const getGPTResults = async () =>{
  //   const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: gptQuery }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   // console.log(gptResults.choices[0]);
  // }

   // search movie in TMDB
   const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const hanleGPTSearchClick = async () =>{
    // getGPTResults();
    const resultedMovie = searchMovieTMDB(serachText);
    const tmdbResults = await Promise.resolve(resultedMovie);
    dispatch(addGptMoviesResults(tmdbResults));
  }


  return (
    <div className='z-40'>
      <h2 className='text-white text-center text-3xl py-3'>Movie Suggestion by CHAT GPT Currently This feature is on hold</h2>

      <form className='w-full h-fit flex flex-col items-center space-y-3 md:space-y-0 md:flex-row md:space-x-3' onSubmit={(e)=>{e.preventDefault();}}>
        <div className='w-full relative'>
          <input onChange={(e)=>{setSerachText(e.target.value)}} value={serachText} placeholder='Seacrh what type of movie you want to watch!' type="text" className='w-full rounded-md outline-none p-3 bg-black bg-opacity-70 text-white placeholder:font-semibold pr-16'/>
          <span className='text-white font-semibold text-xs cursor-pointer hover:text-netflix-red transition-all absolute top-[30%] right-5' onClick={()=>{setSerachText("")}}>CLEAR</span>
        </div>

        <button disabled={serachText.length ===0 ? true: false} 
        className={`${serachText.length ===0 ? "bg-gray-400": "bg-netflix-red hover:bg-red-700"} transition-all text-white py-3 px-5 rounded-md font-semibold w-fit`} 
        onClick={hanleGPTSearchClick}>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
