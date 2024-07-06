const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

// Get all movies
router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// Add a new movie
router.post('/', async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.json(movie);
});

module.exports = router;
