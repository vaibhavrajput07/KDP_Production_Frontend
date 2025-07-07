// // frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import axios from 'axios';

import PrivateRoute from './components/PrivateRoute'; //Protecting the routing

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Support from './pages/Support';
import Login from './pages/Login';

import AdminDashboard from './pages/AdminDashboard'

//Forms

import AddTeamMember from './forms/addTeamMember';

import ScrollToTop from './components/ScrollToTop';
import Spinner from './components/Spinner';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/auth/me', { withCredentials: true })
      .then(() => setIsLoggedIn(true))
      .catch(() => setIsLoggedIn(false))
      .finally(() => setLoading(false)); // Done checking login
  }, []);

  const handleLogout = () => {
    axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true })
      .then(() => setIsLoggedIn(false));
  };


  if (loading) return <Spinner />;

  return (
    <Router>
      <ScrollToTop /> {/* ✅ Add this just after <Router> */}
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/support" element={<Support />} />

        {/* ✅ 1. Prevent access to login when already logged in */}
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/admin/dashboard" /> : <Login onLogin={() => setIsLoggedIn(true)} />
          }
        />

        {/* ✅ 2. Protect dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-member"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <AddTeamMember />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
