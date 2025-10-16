import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './Header';
// import Slider from 'react-slick';
import Footer from './Footer';
import Login from './Login'
import Register from './Register'
import Home from './Home'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
