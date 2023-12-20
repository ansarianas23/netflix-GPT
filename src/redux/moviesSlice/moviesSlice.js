import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerDetail: null,
        NowPopularMovies: null
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{            
            state.nowPlayingMovies = action.payload
        },
        addTrailerDetail: (state, action)=>{            
            state.trailerDetail = action.payload
        },
        addNowPopularMovies: (state, action)=>{            
            state.NowPopularMovies = action.payload
        }
    }
})


export const { addNowPlayingMovies, addTrailerDetail, addNowPopularMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
