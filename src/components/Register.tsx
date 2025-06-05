import React, { useState } from 'react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    country: '',
    ticketType: 'standard'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully!');
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Register for Renewable Meet 2026
          </h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            Secure your place at the world's premier renewable energy conference
          </p>

          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="jobTitle" className="block text-gray-700 font-medium mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
                  Country *
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select your country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">
                  Ticket Type *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-300 rounded p-4 hover:border-amber-500 cursor-pointer">
                    <input
                      type="radio"
                      id="standard"
                      name="ticketType"
                      value="standard"
                      checked={formData.ticketType === 'standard'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="standard" className="cursor-pointer">
                      <span className="font-bold text-gray-900 block mb-1">Standard</span>
                      <span className="text-amber-600 font-bold block mb-1">$799</span>
                      <span className="text-sm text-gray-600">Full conference access</span>
                    </label>
                  </div>
                  
                  <div className="border border-gray-300 rounded p-4 hover:border-amber-500 cursor-pointer">
                    <input
                      type="radio"
                      id="premium"
                      name="ticketType"
                      value="premium"
                      checked={formData.ticketType === 'premium'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="premium" className="cursor-pointer">
                      <span className="font-bold text-gray-900 block mb-1">Premium</span>
                      <span className="text-amber-600 font-bold block mb-1">$1,299</span>
                      <span className="text-sm text-gray-600">VIP access + workshops</span>
                    </label>
                  </div>
                  
                  <div className="border border-gray-300 rounded p-4 hover:border-amber-500 cursor-pointer">
                    <input
                      type="radio"
                      id="executive"
                      name="ticketType"
                      value="executive"
                      checked={formData.ticketType === 'executive'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="executive" className="cursor-pointer">
                      <span className="font-bold text-gray-900 block mb-1">Executive</span>
                      <span className="text-amber-600 font-bold block mb-1">$1,999</span>
                      <span className="text-sm text-gray-600">All access + networking dinner</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-md text-lg transition-colors"
                >
                  Complete Registration
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-8 text-center text-gray-600">
            <p>
              For group registrations or special accommodations, please contact us at{' '}
              <a href="mailto:registrations@renewablemeet2026.org" className="text-amber-600 hover:underline">
                registrations@renewablemeet2026.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;