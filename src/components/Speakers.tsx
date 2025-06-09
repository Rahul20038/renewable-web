import React from 'react';

interface Speaker {
  name: string;
  title: string;
  company: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    name: "Dr. Sarah Johnson",
    title: "Chief Technology Officer",
    company: "SolarTech Innovations",
    image: "https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    name: "Michael Chen",
    title: "Vice President, Renewable Strategy",
    company: "GreenEnergy Global",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    name: "Emma Rodriguez",
    title: "Senior Director, Sustainability",
    company: "EcoFuture Alliance",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    name: "Dr. James Wilson",
    title: "Chief Executive Officer",
    company: "HydroPower Innovations",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

const Speakers: React.FC = () => {
  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Confirmed Speakers 2026
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map(({ name, title, company, image }) => (
            <div key={name} className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-amber-500 shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
              <p className="text-gray-600 mb-1">{title}</p>
              <p className="text-amber-600 font-semibold">{company}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#all-speakers" 
            className="inline-block bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-md text-lg transition-colors"
          >
            View All Speakers
          </a>
        </div>
      </div>
    </section>
  );
};

export default Speakers;