import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Gallery from './Components/Gallery';
import Sliders from './Components/Sliders';
import Footer from './Components/Footer';
import Video from './Components/Video';
import Tickets from './Components/Tickets';
import Contacts from './Components/Contacts';
import Cards from './Components/Cards';
import Section from './Components/Section';
import BuyTickets from './Components/BuyTickets';
import slide1 from './assets/bg.jpg';
import play from './assets/video.mp4';
import './App.css';

function App() {
  const [currentVideo, setCurrentVideo] = useState(play);

  const slides = [
    { image: slide1 },
    { image: slide1 },
    { image: slide1 },
    { image: slide1 },
    { image: slide1 },
  ];

  return (
    <>
      <Header />
      <Carousel slides={slides} />
      <Routes>
        <Route path="/" element={
          <>
            <Cards />
            <Section />
            <Video currentVideo={currentVideo} />
            <Sliders onVideoSelect={setCurrentVideo} />
            <Gallery />
            <Tickets />
            <Contacts />
          </>
        } />
        <Route path="/confirmation" element={<BuyTickets />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
