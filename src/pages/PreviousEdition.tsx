import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const PreviousEdition: React.FC = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
      alt: 'Conference keynote session',
      caption: 'Keynote Address at Renewable Meet 2024',
    },
    {
      src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      alt: 'Panel discussion',
      caption: 'Panel Discussion on Solar Innovations',
    },
    {
      src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
      alt: 'Networking event',
      caption: 'Networking Event with Industry Leaders',
    },
    {
      src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
      alt: 'Workshop session',
      caption: 'Hands-on Workshop on Wind Energy',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-black py-4">
        <div className="container mx-auto px-4">
          <RouterLink to="/" className="text-amber-500 font-bold text-xl">
            &larr; Back to Home
          </RouterLink>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Previous Edition: Renewable Meet 2024</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-lg font-semibold">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PreviousEdition;