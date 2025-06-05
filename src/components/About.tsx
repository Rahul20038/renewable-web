import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Join Global Renewable Energy Leaders in Seoul
        </h2>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            The <span className="font-semibold">RENEWABLE-2026 International Conference</span> is the 8th Edition of the world’s largest Global Conference & Exhibition on Renewable and Sustainable Energy, held in person in Seoul, South Korea, from April 24-26, 2026. Over the years, it has solidified its position as the leading in-person meeting point for the global renewable energy community. The conference will bring together <span className="font-semibold">world leaders, prominent researchers, and industry visionaries</span> to explore and unlock the boundless potential of renewable and sustainable energy. A key focus will be the integration of electric vehicles (EVs) with renewable energy, examining how this synergy can support the transition to a more sustainable future. Additionally, we will explore the synergy between solar energy, wind energy, and EVs in reducing reliance on fossil fuels.
          </p>
        </div>

        {/* Table Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Conference Details Table */}
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Conference Details</h3>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium text-gray-700">Conference Date</td>
                    <td className="py-2 text-gray-600">April 24-26, 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium text-gray-700">Conference Venue</td>
                    <td className="py-2 text-gray-600">Seoul, South Korea</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium text-gray-700">Earlybird Registration</td>
                    <td className="py-2 text-gray-600">July 28, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium text-gray-700">Submission Deadline</td>
                    <td className="py-2 text-gray-600">September 15, 2025</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-gray-700">Workshops</td>
                    <td className="py-2 text-gray-600">10 Workshops</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Right Column: Highlights */}
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Highlights</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>76 Plenary, Keynote & Invited Speakers Confirmed</li>
                <li>Tentative Program Available!</li>
                <li>Meet Our 24 Exhibitors</li>
                <li>Meet Our Sponsors</li>
                <li>Sponsor & Exhibitor Prospectus</li>
                <li className="font-semibold text-gray-700">RENEWABLE-2026 Announced in Seoul, South Korea</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Conference networking" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Panel discussion" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Networking event" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;