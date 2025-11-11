import './App.css'
import LargeMovieCard from './components/LargeMovieCard';
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

    // TODO state for storing now-playing movies
    const [ nowPlayingMovies, setNowPlayingMovies] = useState([]);

    // get config details (base image url)
    useEffect(() => {
        async function fetchConfig() {
            let response = await fetch(configURL, options);
            let data = await response.json();
            setImageBaseURL(data.images.base_url);
        }
        fetchConfig();
    }, [])

    // get trending movies
    useEffect(() => {
        async function getTrendingMovies() {
            let response = await fetch('https://api.themoviedb.org/3/trending/movie/week', options);
            let data = await response.json();
            setTrendingMovies(data.results.slice(0,10));
        }
        getTrendingMovies();
    }, [])    

    // get now-playing movies
    useEffect(() => {
        async function getNowPlayingMovies() {
            let response = await fetch('https://api.themoviedb.org/3/movie/now_playing', options);
            let data = await response.json();
            setNowPlayingMovies(data.results);
        }
        getNowPlayingMovies();
    }, [])

  return (
    <>
      <section className="hero-section">
        <div className="hook">
            <div className="title">Cineflix</div>
            <div className="description">Find your next movie in seconds. Browse <span className='description-bold'>new releases, all-time favorites, and hidden gems</span> — everything in one place.</div>
        </div>
      </section>
      <div className="trending-movies">
        <h1>Trending &gt;&gt;</h1>
        <div className="trending-movies-container">
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
        </div>
      </div>
      <div className="now-playing-movies">
        <h1>Now Playing</h1>
        <div className="now-playing-movies-container">
            {
                nowPlayingMovies.map(nowPlayingMovie => {
                    console.log(nowPlayingMovie);
                    return <LargeMovieCard
                        key={nowPlayingMovie.id}
                        title={nowPlayingMovie.title}
                        imageBaseURL={imageBaseURL}
                        backDropPath={nowPlayingMovie.backdrop_path}
                        userVoteAvg={nowPlayingMovie.vote_average}
                        totalVotes={nowPlayingMovie.vote_count}
                    />
                })
            }
        </div>
      </div>
    </>
  )
}

export default App
