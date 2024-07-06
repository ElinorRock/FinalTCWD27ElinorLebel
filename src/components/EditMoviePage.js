import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditMoviePage.css';

function EditMoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie data by id
    // setMovie(fetchedData);
  }, [id]);

  const handleUpdateMovie = () => {
    // Logic for updating the movie
  };

  return (
    <div className="edit-movie-page">
      {movie && (
        <>
          <h2>Edit Movie</h2>
          <input
            type="text"
            placeholder="Movie Name"
            value={movie.name}
            onChange={(e) => setMovie({ ...movie, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Year"
            value={movie.year}
            onChange={(e) => setMovie({ ...movie, year: e.target.value })}
          />
          <input
            type="text"
            placeholder="Genres"
            value={movie.genres}
            onChange={(e) => setMovie({ ...movie, genres: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={movie.imageUrl}
            onChange={(e) => setMovie({ ...movie, imageUrl: e.target.value })}
          />
          <button onClick={handleUpdateMovie}>Update Movie</button>
        </>
      )}
    </div>
  );
}

export default EditMoviePage;
