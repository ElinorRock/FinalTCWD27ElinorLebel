import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MoviesPage from './components/MoviesPage';
import AddMoviePage from './components/AddMoviePage';
import EditMoviePage from './components/EditMoviePage';
import SubscriptionsPage from './components/SubscriptionsPage';
import AllMembersPage from './components/AllMembersPage';
import AddMemberPage from './components/AddMemberPage';
import EditMemberPage from './components/EditMemberPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/add" element={<AddMoviePage />} />
          <Route path="/movies/edit/:id" element={<EditMoviePage />} />
          <Route path="/subscriptions" element={<SubscriptionsPage />} />
          <Route path="/subscriptions/members" element={<AllMembersPage />} />
          <Route path="/subscriptions/members/add" element={<AddMemberPage />} />
          <Route path="/subscriptions/members/edit/:id" element={<EditMemberPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
