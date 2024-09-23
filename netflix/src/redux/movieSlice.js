import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        TopRatedMovies : null,
        upcomingMovies:null,
        toggle:false,
        trailerMovie :null,
       
    },
    reducers:{
        // actions
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovie:(state,action)=>{
            state.TopRatedMovies =action.payload;
        },
        getTopRatedMovies:(state,action)=>{
            state.popularMovie =action.payload;
        },
        getUpcomingMovies:(state,action)=>{
            state.upcomingMovies =action.payload;
        },
        setToggle:(state)=>{
            state.toggle = !state.toggle;
        },
        getTrailerMovie:(state,action)=>{
            state.trailerMovie = action.payload;
        }

    }
});
export const {getNowPlayingMovies, getPopularMovie, getTopRatedMovies,getUpcomingMovies,setToggle,getTrailerMovie} = movieSlice.actions;
export default movieSlice.reducer;