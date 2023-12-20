import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerDetail: null,
        NowPopularMovies: null,
        TopRatedMovies: null,
        UpcomingMovies: null
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
        },
        addTopRatedMovies: (state, action)=>{            
            state.TopRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action)=>{            
            state.UpcomingMovies = action.payload
        }
    }
})


export const { addNowPlayingMovies, addTrailerDetail, addNowPopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
