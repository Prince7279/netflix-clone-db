import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MovieContainer from './MovieContainer';
import MainContainer from './MainContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';

const Browse = () => {
  const user = useSelector(store=>store.app.user);
  const toggle = useSelector(store=>store.movie.toggle);
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  // My custom hook///
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
    
    useEffect(()=>{
      if(!user){
        navigate("/");
      }
      // nowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  

  return (
    <div>
        <Header/>
        <div>
          
          {
            toggle ? <SearchMovie/> : (
              <>
                <MainContainer/>
                <MovieContainer/> 
              </>
            
            )
          }
             
        </div>
    </div>
  )
}

export default Browse