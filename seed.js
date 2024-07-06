const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const Member = require('./models/Member');

mongoose.connect('mongodb://localhost:27017/movies_subscription_db')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const movies = [
  { name: "Movie 1", yearPremiered: 2020, genres: ["Action", "Adventure"], imageUrl: "https://via.placeholder.com/150" },
  { name: "Movie 2", yearPremiered: 2019, genres: ["Drama", "Romance"], imageUrl: "https://via.placeholder.com/150" },
  { name: "Movie 3", yearPremiered: 2021, genres: ["Sci-Fi", "Thriller"], imageUrl: "https://via.placeholder.com/150" },
  { name: "Movie 4", yearPremiered: 2018, genres: ["Comedy"], imageUrl: "https://via.placeholder.com/150" },
  { name: "Movie 5", yearPremiered: 2022, genres: ["Horror"], imageUrl: "https://via.placeholder.com/150" }
];

const members = [
  { email: "member1@example.com", city: "City1" },
  { email: "member2@example.com", city: "City2" },
  { email: "member3@example.com", city: "City3" }
];

const seedDB = async () => {
  await Movie.insertMany(movies);
  await Member.insertMany(members);
  console.log('Database seeded');
  mongoose.connection.close();
};

seedDB().catch(err => console.error(err));
