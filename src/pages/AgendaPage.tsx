import React from 'react';
import Agenda from '../components/Agenda';

const AgendaPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Conference Agenda
          </h1>
          <p className="text-xl text-gray-300 text-center mt-4">
            Explore our comprehensive program of events and sessions
          </p>
        </div>
      </div>
      <Agenda />
    </div>
  );
};

export default AgendaPage;