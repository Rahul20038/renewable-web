import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  country: string;
  ticketType: string;
  paymentMethod: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    country: '',
    ticketType: 'standard',
    paymentMethod: 'visa',
  });
  const [expandedTicket, setExpandedTicket] = useState<string | null>(null);
  const [expandedPayment, setExpandedPayment] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully!');
  };

  const toggleTicketExpand = (type: string) => {
    setExpandedTicket(expandedTicket === type ? null : type);
  };

  const togglePaymentExpand = (method: string) => {
    setExpandedPayment(expandedPayment === method ? null : method);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white font-['IBM_Plex_Sans']">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-black bg-gray-200 rounded-full mb-4">
              REGISTRATION OPEN
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Renewable Energy Summit 2026
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Secure your exclusive access to the premier renewable energy conference of the year
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200 bg-white placeholder-gray-400 font-medium"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200 bg-white placeholder-gray-400 font-medium"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200 bg-white placeholder-gray-400 font-medium"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200 bg-white placeholder-gray-400 font-medium"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="jobTitle" className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200 bg-white placeholder-gray-400 font-medium"
                        placeholder="Job title"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200 bg-white text-gray-700 font-medium"
                    >
                      <option value="">Select country</option>
                      <option value="us">United States</option>
                      <option value="ca">Canada</option>
                      <option value="uk">United Kingdom</option>
                      <option value="au">Australia</option>
                      <option value="de">Germany</option>
                      <option value="fr">France</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-4 text-sm uppercase tracking-wider">
                      Ticket Type *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {['standard', 'premium', 'executive'].map(type => {
                        const prices = { standard: '$799', premium: '$1,299', executive: '$1,999' };
                        const descs = {
                          standard: 'Full conference access',
                          premium: 'VIP access + workshops',
                          executive: 'All access + networking dinner'
                        };
                        const details = {
                          standard: [
                            'Access to all keynote sessions',
                            'General seating',
                            'Standard networking events',
                            'Conference materials'
                          ],
                          premium: [
                            'Priority access to all sessions',
                            'Reserved seating',
                            'Exclusive workshops',
                            'Premium networking events',
                            'Conference materials + digital access'
                          ],
                          executive: [
                            'VIP access to all sessions',
                            'Front-row seating',
                            'All workshops included',
                            'Exclusive networking dinner',
                            'Personalized concierge service',
                            'Premium conference materials'
                          ]
                        };
                        const icons = {
                          standard: '🎟️',
                          premium: '🌟',
                          executive: '👑'
                        };
                        return (
                          <div
                            key={type}
                            className={`border-2 rounded-xl p-5 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer ${
                              formData.ticketType === type ? 'border-black bg-gray-100' : 'border-gray-200'
                            }`}
                            onClick={() => {
                              setFormData(prev => ({ ...prev, ticketType: type }));
                              toggleTicketExpand(type);
                            }}
                          >
                            <div className="flex items-start">
                              <span className="text-2xl mr-3">{icons[type as keyof typeof icons]}</span>
                              <div className="flex-1">
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id={type}
                                    name="ticketType"
                                    value={type}
                                    checked={formData.ticketType === type}
                                    onChange={handleChange}
                                    className="mr-2 accent-black cursor-pointer"
                                  />
                                  <label htmlFor={type} className="cursor-pointer select-none">
                                    <span className="font-bold text-gray-900 block mb-1 capitalize">{type}</span>
                                  </label>
                                </div>
                                <span className="text-black font-bold block text-lg mb-1">{prices[type as keyof typeof prices]}</span>
                                <span className="text-sm text-gray-600">{descs[type as keyof typeof descs]}</span>
                                {expandedTicket === type && (
                                  <ul className="mt-3 text-sm text-gray-700 space-y-1">
                                    {details[type as keyof typeof details].map((detail, index) => (
                                      <li key={index} className="flex items-start">
                                        <span className="text-black mr-2">•</span>
                                        <span>{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-4 text-sm uppercase tracking-wider">
                      Payment Method *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {['visa', 'mastercard', 'amex'].map(method => {
                        const descs = {
                          visa: 'Visa Credit/Debit',
                          mastercard: 'Mastercard Credit/Debit',
                          amex: 'American Express'
                        };
                        const details = {
                          visa: [
                            'Accepted worldwide',
                            'Secure payment processing',
                            'Instant confirmation'
                          ],
                          mastercard: [
                            'Global acceptance',
                            'Fraud protection',
                            'Fast transaction processing'
                          ],
                          amex: [
                            'Premium card benefits',
                            'Enhanced security features',
                            'Quick payment confirmation'
                          ]
                        };
                        const icons = {
                          visa: '💳',
                          mastercard: '💳',
                          amex: '💳'
                        };
                        return (
                          <div
                            key={method}
                            className={`border-2 rounded-xl p-5 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer ${
                              formData.paymentMethod === method ? 'border-black bg-gray-100' : 'border-gray-200'
                            }`}
                            onClick={() => {
                              setFormData(prev => ({ ...prev, paymentMethod: method }));
                              togglePaymentExpand(method);
                            }}
                          >
                            <div className="flex items-start">
                              <span className="text-2xl mr-3">{icons[method as keyof typeof icons]}</span>
                              <div className="flex-1">
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id={method}
                                    name="paymentMethod"
                                    value={method}
                                    checked={formData.paymentMethod === method}
                                    onChange={handleChange}
                                    className="mr-2 accent-black cursor-pointer"
                                  />
                                  <label htmlFor={method} className="cursor-pointer select-none">
                                    <span className="font-bold text-gray-900 block mb-1 capitalize">{method}</span>
                                  </label>
                                </div>
                                <span className="text-sm text-gray-600">{descs[method as keyof typeof descs]}</span>
                                {expandedPayment === method && (
                                  <ul className="mt-3 text-sm text-gray-700 space-y-1">
                                    {details[method as keyof typeof details].map((detail, index) => (
                                      <li key={index} className="flex items-start">
                                        <span className="text-black mr-2">•</span>
                                        <span>{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Complete Registration
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-6 text-center text-gray-600 text-sm">
                <p>
                  For group registrations or special accommodations, contact us at{' '}
                  <a href="mailto:registrations@renewablemeet2026.org" className="text-black hover:underline font-medium">
                    registrations@renewablemeet2026.org
                  </a>
                </p>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl h-full">
                <h3 className="text-2xl font-bold mb-6">Event Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-gray-300 font-semibold mb-2">Date</h4>
                    <p>March 15-17, 2026</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-300 font-semibold mb-2">Location</h4>
                    <p>Convention Center<br />San Francisco, CA</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-300 font-semibold mb-2">What's Included</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-gray-300 mr-2">✓</span>
                        <span>Keynote speeches from industry leaders</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-300 mr-2">✓</span>
                        <span>Exclusive networking opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-300 mr-2">✓</span>
                        <span>Cutting-edge technology showcases</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-300 mr-2">✓</span>
                        <span>Premium catering and refreshments</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <h4 className="text-gray-300 font-semibold mb-2">Why Attend?</h4>
                    <p className="text-gray-400">
                      Join 2,000+ professionals from across the renewable energy sector for three days of innovation, collaboration, and business development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;