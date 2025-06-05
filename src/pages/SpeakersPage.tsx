import React from 'react';
import Speakers from '../components/Speakers';

const SpeakersPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Conference Speakers
          </h1>
          <p className="text-xl text-gray-300 text-center mt-4">
            Meet our distinguished lineup of industry experts and thought leaders
          </p>
        </div>
      </div>
      <Speakers />
    </div>
  );
};

export default SpeakersPage;