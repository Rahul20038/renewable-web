import React, { useState } from 'react';

interface RegisterFormData {
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

interface PersonalInfoFormProps {
  registerFormData: RegisterFormData;
  setRegisterFormData: React.Dispatch<React.SetStateAction<RegisterFormData>>;
  onNext: () => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  registerFormData,
  setRegisterFormData,
  onNext,
}) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Invalid email format';
    }
    if (name === 'phone' && value && !/^\+?\d{10,15}$/.test(value)) {
      error = 'Phone number must be 10-15 digits';
    }
    if (['title', 'name', 'institute', 'country', 'registrationType'].includes(name) && !value) {
      error = 'This field is required';
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRegisterFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: { [key: string]: string } = {};
    ['title', 'name', 'phone', 'email', 'institute', 'country', 'registrationType'].forEach((key) => {
      validateField(key, registerFormData[key as keyof RegisterFormData] as string);
      if (!registerFormData[key as keyof RegisterFormData]) {
        validationErrors[key] = 'This field is required';
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onNext();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Select Title *
        </label>
        <select
          name="title"
          value={registerFormData.title}
          onChange={handleChange}
          required
          className={`form-select ${errors.title ? 'error' : ''}`}
        >
          <option value="">Title</option>
          <option value="mr">Mr.</option>
          <option value="ms">Ms.</option>
          <option value="dr">Dr.</option>
          <option value="prof">Prof.</option>
        </select>
        {errors.title && <p className="error-text">{errors.title}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Name *
        </label>
        <input
          name="name"
          placeholder="Name"
          value={registerFormData.name}
          onChange={handleChange}
          required
          className={`form-input ${errors.name ? 'error' : ''}`}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone *
        </label>
        <input
          name="phone"
          placeholder="Phone"
          value={registerFormData.phone}
          onChange={handleChange}
          required
          className={`form-input ${errors.phone ? 'error' : ''}`}
        />
        {errors.phone && <p className="error-text">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email *
        </label>
        <input
          name="email"
          placeholder="Email"
          value={registerFormData.email}
          onChange={handleChange}
          required
          className={`form-input ${errors.email ? 'error' : ''}`}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Institute/University *
        </label>
        <input
          name="institute"
          placeholder="Institute/University"
          value={registerFormData.institute}
          onChange={handleChange}
          required
          className={`form-input ${errors.institute ? 'error' : ''}`}
        />
        {errors.institute && <p className="error-text">{errors.institute}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Country *
        </label>
        <select
          name="country"
          value={registerFormData.country}
          onChange={handleChange}
          required
          className={`form-select ${errors.country ? 'error' : ''}`}
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
        {errors.country && <p className="error-text">{errors.country}</p>}
      </div>

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
        {errors.registrationType && <p className="error-text">{errors.registrationType}</p>}
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

      <div className="pt-4 button-group">
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;