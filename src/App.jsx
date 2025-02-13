import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Navbar/Header';
import Hero from './components/Hero/Hero';
import Carousel from './components/Carousel/Carousel';
import Properties from './components/Properties/Properties';
import Footer from './components/Footer/Footer';
import Amenities from './components/Amenities/Amenities';

function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <Properties />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/schedule" element={<h2>Schedule Section</h2>} />
        <Route path="/contact" element={<h2>Contact Section</h2>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
