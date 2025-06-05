import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Highly Commended
            </h3>
            <p className="text-gray-700 mb-6 flex-grow">
              A highly commended program featuring global renewable energy sector's most dynamic energy investors, independents, finance, legal and service companies and Governments and NGO's seeking investors.
            </p>
            <a 
              href="#learn-more" 
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded transition-colors mt-auto self-start"
            >
              Learn More
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Pioneering Content
            </h3>
            <p className="text-gray-700 mb-6 flex-grow">
              Leading the way with new and thought-provoking content, the Renewable Meet 2026 pioneers ideas and speakers never seen before by the industry, focusing on the latest innovations in sustainable energy solutions.
            </p>
            <a 
              href="#learn-more" 
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded transition-colors mt-auto self-start"
            >
              Learn More
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Passionate about Energy
            </h3>
            <p className="text-gray-700 mb-6 flex-grow">
              Our team has extensive experience in the renewable energy sector and is 100% committed to promoting opportunities in the clean energy industry globally, with a focus on accelerating the transition to sustainable power sources.
            </p>
            <a 
              href="#learn-more" 
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded transition-colors mt-auto self-start"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;