import React from 'react';

const Sponsors: React.FC = () => {
  // These would typically be loaded from an API or CMS
  const sponsors = [
    { name: "Energy Corp", logo: "https://via.placeholder.com/180x60?text=EnergyCorp" },
    { name: "Green Future", logo: "https://via.placeholder.com/180x60?text=GreenFuture" },
    { name: "Sustainable Power", logo: "https://via.placeholder.com/180x60?text=SustainablePower" },
    { name: "EcoEnergy", logo: "https://via.placeholder.com/180x60?text=EcoEnergy" },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={sponsor.logo} 
                alt={`${sponsor.name} logo`} 
                className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;