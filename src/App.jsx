import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Navbar/Header';
import Hero from './components/Hero/Hero';
import Carousel from './components/Carousel/Carousel';
import Properties from './components/Properties/Properties';
import Footer from './components/Footer/Footer';
import Amenities from './components/Amenities/Amenities';
import Schedule from './components/Schedule/Schedule';
import Contact from './components/Contact/Contact';

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
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
