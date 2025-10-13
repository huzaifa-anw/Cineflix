import './App.css'
import MovieCard from './components/MovieCard'
import { useEffect, useState } from 'react';

function App() {

    const configURL = 'https://api.themoviedb.org/3/configuration';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
        }
    };

    // state for storing the base url for accessing images
    const [ imageBaseURL, setImageBaseURL ] = useState('');

    // state for storing terending movies
    const [ trendingMovies, setTrendingMovies ] = useState([]);

    // TODO state for storing popular movies


    // get config details (base image url)
    useEffect(() => {
        async function fetchConfig() {
            let response = await fetch(configURL, options);
            let data = await response.json();
            setImageBaseURL(data.images.base_url);
        }
        fetchConfig();
    }, [])

    //get trending movies
    useEffect(() => {
        async function getTrendingMovies() {
            let response = await fetch('https://api.themoviedb.org/3/trending/movie/week', options);
            let data = await response.json();
            setTrendingMovies(data.results.slice(0,11));
        }
        getTrendingMovies();
    }, [])    

  return (
    <>
      <h1>cineflix</h1>
      <p>black purple dark purple</p>
      <h2>Trending this week</h2>
      {
        trendingMovies.map(trendingMovie => {
            return <MovieCard 
                key={trendingMovie.id}
                title={trendingMovie.original_title} 
                imageBaseURL={imageBaseURL}
                posterPath={trendingMovie.poster_path}
            />
        })
      }
    </>
  )
}

export default App
