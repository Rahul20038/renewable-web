import React, { useState, useEffect } from 'react';

interface FormData {
  title: string;
  name: string;
  phone: string;
  email: string;
  institute: string;
  country: string;
  registrationType: string;
  presentationType: string;
  guests: number;
  nights: number;
  accompanyingPerson: boolean;
  extraNights: number;
  captcha: string;
}

const Style: React.FC = () => (
  <style>
    {`
      .form-input, .form-select {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        font-size: 1rem;
        color: #1f2937;
        transition: border-color 0.2s ease;
      }
      .form-input:focus, .form-select:focus {
        outline: none;
        border-color: #000;
      }
      .custom-checkbox {
        width: 1.5rem;
        height: 1.5rem;
        border: 2px solid #1f2937;
        border-radius: 0.25rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.2s ease, border-color 0.2s ease;
      }
      .custom-checkbox.checked {
        background-color: #1f2937;
        border-color: #1f2937;
      }
      .custom-checkbox.checked::before {
        content: '✔';
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
      }
      .radio-group {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1rem;
      }
      .radio-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
      }
      .radio-input {
        width: 1.25rem;
        height: 1.25rem;
        border: 2px solid #1f2937;
        border-radius: 50%;
        appearance: none;
        cursor: pointer;
      }
      .radio-input:checked {
        background-color: #1f2937;
        border-color: #1f2937;
        position: relative;
      }
      .radio-input:checked::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .payment-summary {
        border-top: 2px dashed #1f2937;
        padding-top: 1.5rem;
        margin-top: 2rem;
      }
      .captcha-section {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
      }
      .captcha-image {
        background-color: #e5e7eb;
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-family: monospace;
        font-size: 1.25rem;
        color: #1f2937;
      }
      .refresh-icon {
        cursor: pointer;
        color: #1f2937;
        font-size: 1.25rem;
      }
      .accommodation-selectors {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
    `}
  </style>
);

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    name: '',
    phone: '',
    email: '',
    institute: '',
    country: '',
    registrationType: '',
    presentationType: '',
    guests: 1,
    nights: 1,
    accompanyingPerson: false,
    extraNights: 0,
    captcha: '',
  });

  const [captchaCode, setCaptchaCode] = useState<string>('');

  // Function to generate a random CAPTCHA code
  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaCode(result);
    setFormData((prev) => ({ ...prev, captcha: '' }));
  };

  // Initialize CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: parseInt(value) || value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.captcha.toLowerCase() !== captchaCode.toLowerCase()) {
      alert('Invalid CAPTCHA code');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully!');
  };

  return (
    <div>
      <Style />
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
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Title *
                </label>
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Title</option>
                  <option value="mr">Mr.</option>
                  <option value="ms">Ms.</option>
                  <option value="dr">Dr.</option>
                  <option value="prof">Prof.</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Institute/University *
                </label>
                <input
                  name="institute"
                  placeholder="Institute/University"
                  value={formData.institute}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Choose Country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Registration and Presentation Options */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Registration Type *
                </label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="registrationType"
                      value="registrationOnly"
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    Registration Only
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="registrationType"
                      value="registrationAndAccommodation"
                      onChange={handleChange}
                      className="radio-input"
                    />
                    Registration and Accommodation
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Presentation Type
                </label>
                <div className="radio-group">
                  {['Speaker', 'Poster', 'Listener/Delegate', 'Sponsor', 'Student', 'Exhibitor'].map((type) => (
                    <label key={type} className="radio-label">
                      <input
                        type="radio"
                        name="presentationType"
                        value={type.toLowerCase()}
                        onChange={handleChange}
                        className="radio-input"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              {/* Accommodation Type with Dropdowns */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Accommodation Type
                </label>
                <div className="accommodation-selectors">
                  <select
                    name="nights"
                    value={formData.nights}
                    onChange={handleChange}
                    className="form-select w-32"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((night) => (
                      <option key={night} value={night}>
                        {night} Night{night > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="form-select w-32"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((guest) => (
                      <option key={guest} value={guest}>
                        {guest} Guest{guest > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="payment-summary">
                <h3 className="text-xl font-semibold mb-4">Payment Summary</h3>
                <div className="flex justify-between mb-2">
                  <span>Processing Fee in $ (5% processing fee is applicable on total amount):</span>
                  <span>TBD</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Total Amount Payable in $:</span>
                  <span>TBD</span>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  By clicking "Pay Now", you confirm that you have read the terms and conditions, that you understand them and that you agree to be bound by them.
                </p>

                <div className="captcha-section">
                  <span className="captcha-image">{captchaCode}</span>
                  <span>Enter the code above here:</span>
                  <input
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    required
                    className="form-input w-32"
                  />
                  <span className="refresh-icon" onClick={generateCaptcha}>
                    🔄
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;