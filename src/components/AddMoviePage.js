import React, { useState } from 'react';
import './AddMoviePage.css';

function AddMoviePage() {
  const [movieName, setMovieName] = useState('');
  const [year, setYear] = useState('');
  const [genres, setGenres] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAddMovie = () => {
    // Logic for adding a movie
  };

  return (
    <div className="add-movie-page">
      <h2>Add Movie</h2>
      <input
        type="text"
        placeholder="Movie Name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genres"
        value={genres}
        onChange={(e) => setGenres(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
}

export default AddMoviePage;
