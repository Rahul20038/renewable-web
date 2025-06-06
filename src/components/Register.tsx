import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  country: string;
  ticketType: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
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
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully!');
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 tracking-tight">
            Join Renewable Meet 2026
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 font-medium">
            Secure your spot at the leading renewable energy conference
          </p>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
            <div onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2 text-sm">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 bg-white shadow-sm placeholder-gray-400"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2 text-sm">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 bg-white shadow-sm placeholder-gray-400"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 bg-white shadow-sm placeholder-gray-400"
                  placeholder="Your email address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-semibold mb-2 text-sm">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 bg-white shadow-sm placeholder-gray-400"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="jobTitle" className="block text-gray-700 font-semibold mb-2 text-sm">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 bg-white shadow-sm placeholder-gray-400"
                    placeholder="Your job title"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-gray-700 font-semibold mb-2 text-sm">
                  Country *
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 bg-white shadow-sm text-gray-600"
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
                <label className="block text-gray-700 font-semibold mb-4 text-sm">
                  Ticket Type *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1">
                    <input
                      type="radio"
                      id="standard"
                      name="ticketType"
                      value="standard"
                      checked={formData.ticketType === 'standard'}
                      onChange={handleChange}
                      className="mr-2 accent-amber-500"
                    />
                    <label htmlFor="standard" className="cursor-pointer">
                      <span className="font-bold text-gray-900 block mb-1">Standard</span>
                      <span className="text-amber-600 font-bold block mb-1">$799</span>
                      <span className="text-sm text-gray-500">Full conference access</span>
                    </label>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1">
                    <input
                      type="radio"
                      id="premium"
                      name="ticketType"
                      value="premium"
                      checked={formData.ticketType === 'premium'}
                      onChange={handleChange}
                      className="mr-2 accent-amber-500"
                    />
                    <label htmlFor="premium" className="cursor-pointer">
                      <span className="font-bold text-gray-900 block mb-1">Premium</span>
                      <span className="text-amber-600 font-bold block mb-1">$1,299</span>
                      <span className="text-sm text-gray-500">VIP access + workshops</span>
                    </label>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1">
                    <input
                      type="radio"
                      id="executive"
                      name="ticketType"
                      value="executive"
                      checked={formData.ticketType === 'executive'}
                      onChange={handleChange}
                      className="mr-2 accent-amber-500"
                    />
                    <label htmlFor="executive" className="cursor-pointer">
                      <span className="font-bold text-gray-900 block mb-1">Executive</span>
                      <span className="text-amber-600 font-bold block mb-1">$1,999</span>
                      <span className="text-sm text-gray-500">All access + networking dinner</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Complete Registration
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>
              For group registrations or special accommodations, contact us at{' '}
              <a href="mailto:registrations@renewablemeet2026.org" className="text-amber-600 hover:underline font-medium">
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