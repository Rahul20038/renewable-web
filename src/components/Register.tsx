import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  country: string;
}

interface Plan {
  name: string;
  price: string;
  description: string;
  features: { name: string; available: boolean }[];
  buttonText: string;
}

const Style: React.FC = () => (
  <style>
    {`
      .form-input {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        font-size: 1rem;
        color: #1f2937;
        transition: border-color 0.2s ease;
      }
      .form-input:focus {
        outline: none;
        border-color: #000;
      }
      .pricing-card {
        background-color: #1f2937;
        border-radius: 1rem;
        padding: 2rem;
        color: white;
        transition: transform 0.2s ease, background-color 0.2s ease;
      }
      .pricing-card:hover {
        transform: translateY(-5px);
      }
      .pricing-card.selected {
        background-color: #374151;
        border: 2px solid #ffffff;
      }
      .feature-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
        font-size: 1rem;
      }
      .feature-check {
        color: #fff;
        font-size: 1.25rem;
      }
      .feature-cross {
        color: #6b7280;
        font-size: 1.25rem;
      }
      .custom-checkbox {
        width: 1.5rem;
        height: 1.5rem;
        border: 2px solid #ffffff;
        border-radius: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.2s ease, border-color 0.2s ease;
      }
      .custom-checkbox.checked {
        background-color: #ffffff;
        border-color: #ffffff;
      }
      .custom-checkbox.checked::before {
        content: '✔';
        color: #1f2937;
        font-size: 1rem;
        font-weight: bold;
      }
    `}
  </style>
);

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    country: '',
  });

  const [selectedPlan, setSelectedPlan] = useState<string>('Standard');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, selectedPlan });
    alert('Registration submitted successfully!');
  };

  const formPlans: Plan[] = [
    {
      name: 'Standard',
      price: '$99',
      description: 'Best for individuals',
      features: [
        { name: 'Basic access', available: true },
        { name: 'Email support', available: true },
        { name: 'Networking events', available: false },
        { name: 'VIP sessions', available: false },
        { name: 'Priority support', available: false },
        { name: 'Exclusive workshops', available: false },
      ],
      buttonText: 'Select',
    },
    {
      name: 'Premium',
      price: '$199',
      description: 'Best for small teams',
      features: [
        { name: 'Full access', available: true },
        { name: 'Email support', available: true },
        { name: 'Networking events', available: true },
        { name: 'VIP sessions', available: false },
        { name: 'Priority support', available: false },
        { name: 'Exclusive workshops', available: false },
      ],
      buttonText: 'Select',
    },
    {
      name: 'Executive',
      price: '$299',
      description: 'Best for large teams',
      features: [
        { name: 'Full access', available: true },
        { name: 'Email support', available: true },
        { name: 'Networking events', available: true },
        { name: 'VIP sessions', available: true },
        { name: 'Priority support', available: true },
        { name: 'Exclusive workshops', available: true },
      ],
      buttonText: 'Select',
    },
  ];

  const pricingPlans: Plan[] = [
    {
      name: 'Free',
      price: '$0/mo',
      description: 'Best for 1-5 users',
      features: [
        { name: 'One workspace', available: true },
        { name: 'Email support', available: true },
        { name: '1 day data retention', available: false },
        { name: 'Custom roles', available: false },
        { name: 'Priority support', available: false },
        { name: 'SSO', available: false },
      ],
      buttonText: 'Get started free',
    },
    {
      name: 'Pro',
      price: '$79/mo',
      description: 'Best for 5-50 users',
      features: [
        { name: 'Five workspaces', available: true },
        { name: 'Email support', available: true },
        { name: '7 day data retention', available: true },
        { name: 'Custom roles', available: true },
        { name: 'Priority support', available: false },
        { name: 'SSO', available: false },
      ],
      buttonText: '14-day free trial',
    },
    {
      name: 'Enterprise',
      price: 'Contact us',
      description: 'Best for 50+ users',
      features: [
        { name: 'Unlimited workspaces', available: true },
        { name: 'Email support', available: true },
        { name: '30 day data retention', available: true },
        { name: 'Custom roles', available: true },
        { name: 'Priority support', available: true },
        { name: 'SSO', available: true },
      ],
      buttonText: 'Contact us',
    },
  ];

  return (
    <div>
      <Style />
      {/* Registration Section */}
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
              Secure your exclusive access to the premier renewable energy
              conference of the year
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <input
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <input
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="company"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <input
                  name="jobTitle"
                  placeholder="Job title"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="form-input"
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

              {/* Pricing Section within Form */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Your Plan *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {formPlans.map((plan, index) => (
                    <div
                      key={index}
                      className={`pricing-card ${
                        selectedPlan === plan.name ? 'selected' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{plan.name}</h3>
                        <div
                          className={`custom-checkbox ${
                            selectedPlan === plan.name ? 'checked' : ''
                          }`}
                          onClick={() => handlePlanSelect(plan.name)}
                        />
                      </div>
                      <p className="text-3xl font-bold mb-2">{plan.price}</p>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <div className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="feature-item">
                            {feature.available ? (
                              <span className="feature-check">✔</span>
                            ) : (
                              <span className="feature-cross">✘</span>
                            )}
                            <span
                              className={
                                feature.available
                                  ? 'text-white'
                                  : 'text-gray-500'
                              }
                            >
                              {feature.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
                >
                  Complete Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Separate Pricing Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Select the perfect plan for your team’s needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="pricing-card">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold mb-2">{plan.price}</p>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      {feature.available ? (
                        <span className="feature-check">✔</span>
                      ) : (
                        <span className="feature-cross">✘</span>
                      )}
                      <span
                        className={
                          feature.available ? 'text-white' : 'text-gray-500'
                        }
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-3 rounded-lg text-lg font-semibold transition-all ${
                    plan.name === 'Pro'
                      ? 'bg-white text-black hover:bg-gray-200'
                      : 'border border-white text-white hover:bg-white hover:text-black'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;