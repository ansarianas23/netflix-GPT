import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        trailerDetail: null,
        nowPlayingMovies: null,
        NowPopularMovies: null,
        TopRatedMovies: null,
        UpcomingMovies: null,
        GptMoviesResults: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{            
            state.nowPlayingMovies = action.payload;
        },
        addTrailerDetail: (state, action)=>{            
            state.trailerDetail = action.payload;
        },
        addNowPopularMovies: (state, action)=>{            
            state.NowPopularMovies = action.payload;
        },
        addTopRatedMovies: (state, action)=>{            
            state.TopRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action)=>{            
            state.UpcomingMovies = action.payload;
        },
        addGptMoviesResults:(state, action)=>{
            state.GptMoviesResults = action.payload;
        },
        removeGptMoviesResults:(state, action)=>{
            state.GptMoviesResults = null;
        }
    }
})


export const { addNowPlayingMovies, addTrailerDetail, addNowPopularMovies, addTopRatedMovies, addUpcomingMovies, addGptMoviesResults, removeGptMoviesResults } = moviesSlice.actions;
export default moviesSlice.reducer;
