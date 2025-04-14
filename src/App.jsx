import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Carousel/Carousel";
import Properties from "./components/Properties/Properties";
import Feedback from "./components/Feedback/FeedBack";
import Referral from "./components/Referral/Referral";
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

function Layout({ children }) {
  const location = useLocation();
  const isSignInPage = location.pathname === "/signin";

  return (
    <>
      {!isSignInPage && <Header />}
      {children}
      {!isSignInPage && <Footer />}
    </>
  );
  x;
}

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div id="toaster-container">
          <Toaster position="top-right" />
        </div>
      </Layout>
      <SpeedInsights />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
