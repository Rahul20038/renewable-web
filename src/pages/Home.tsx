import React from 'react';
import Hero from '../components/Hero';
import Sponsors from '../components/Sponsors';
import About from '../components/About';
import Features from '../components/Features';
import Speakers from '../components/Speakers';
import Agenda from '../components/Agenda';
import Register from '../components/Register';
import Videos from '../components/videos';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <About />
      <Features />
      <Speakers />
      <Agenda />
      <Videos />
      <Register />
    </>
  );
};

export default Home;