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
    ticketType: 'standard',
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
    <section className="bg-gradient-to-b from-gray-50 to-white font-['IBM_Plex_Sans']">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
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

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} required className="form-input" />
              <input name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} required className="form-input" />
            </div>

            <input name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required className="form-input" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="company" placeholder="Company name" value={formData.company} onChange={handleChange} required className="form-input" />
              <input name="jobTitle" placeholder="Job title" value={formData.jobTitle} onChange={handleChange} required className="form-input" />
            </div>

            <select name="country" value={formData.country} onChange={handleChange} required className="form-input">
              <option value="">Select country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="au">Australia</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="other">Other</option>
            </select>

            {/* Ticket Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ticket Type *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { type: 'standard', price: '$99' },
                  { type: 'premium', price: '$199' },
                  { type: 'executive', price: '$299' },
                ].map(({ type, price }) => (
                  <label
                    key={type}
                    className={`border rounded-2xl p-6 min-h-[140px] flex flex-col items-start justify-center gap-2 cursor-pointer transition-all duration-200 ${
                      formData.ticketType === type ? 'border-black bg-gray-100' : 'border-gray-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="ticketType"
                      value={type}
                      checked={formData.ticketType === type}
                      onChange={handleChange}
                      className="accent-black mr-2"
                    />
                    <span className="capitalize font-semibold text-lg">{type}</span>
                    <span className="text-sm text-gray-600">{price}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button type="submit" className="w-full bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all">
                Complete Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;