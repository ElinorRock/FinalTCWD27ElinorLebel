import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MoviesPage.css';

function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/movies');
        setMovies(res.data);
      } catch (err) {
        console.error('Error fetching movies:', err);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="movies-container">
      <h1>All Movies</h1>
      <nav>
        <Link to="/movies/add">Add Movie</Link>
      </nav>
      <div className="movies">
        {movies.slice(0, 5).map((movie) => (
          <div key={movie._id} className="movie">
            <h2>{movie.name}</h2>
            <p>{movie.yearPremiered}</p>
            <img src={movie.imageUrl} alt={movie.name} />
            <Link to={`/movies/edit/${movie._id}`}>Edit</Link>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesPage;

