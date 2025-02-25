import React from "react";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Navbar/Header";
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Carousel/Carousel";
import Properties from "./components/Properties/Properties";
import Feedback from "./components/Feedback/FeedBack";
import Referral from "./components/Referral/Referral";
import Footer from "./components/Footer/Footer";
import Amenities from "./components/Amenities/Amenities";
import Schedule from "./components/Schedule/Schedule";
import Contact from "./components/Contact/Contact";
import { ReferralProvider } from "./components/Referral/ReferralContext";

function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <Properties />
      <Feedback />
      <ReferralProvider>
        <Referral />
      </ReferralProvider>
    </>
  );
}

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
