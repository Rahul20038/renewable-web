import React, { useState, useEffect } from 'react';

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

interface PricingConfig {
  processingFee: number;
  totalAmount: number;
}

interface PaymentInfoFormProps {
  captchaCode: string;
  generateCaptcha: () => void;
  registerFormData: RegisterFormData;
  setRegisterFormData: React.Dispatch<React.SetStateAction<RegisterFormData>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  resetForm: () => void;
  onBack: () => void;
}

const PaymentInfoForm: React.FC<PaymentInfoFormProps> = ({
  captchaCode,
  generateCaptcha,
  registerFormData,
  setRegisterFormData,
  setShowModal,
  resetForm,
  onBack,
}) => {
  const [pricing, setPricing] = useState<PricingConfig | null>(null);
  const [pricingError, setPricingError] = useState<string>('');

  const fetchPricing = async () => {
    if (!registerFormData.registrationType || !registerFormData.presentationType) {
      setPricing(null);
      return;
    }

    try {
      const response = await fetch('https://renewable-be.onrender.com/api/registration/get-pricing-config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          registrationType: registerFormData.registrationType.toUpperCase().replace('AND', '_'),
          presentationType: registerFormData.presentationType.toUpperCase(),
          numberOfNights: registerFormData.nights,
          numberOfGuests: registerFormData.guests,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch pricing');
      }

      const data: PricingConfig = await response.json();
      setPricing(data);
      setPricingError('');
    } catch (error) {
      console.error('Error fetching pricing:', error);
      setPricing(null);
      setPricingError('Unable to load pricing details. Please try again.');
    }
  };

  useEffect(() => {
    fetchPricing();
  }, [
    registerFormData.registrationType,
    registerFormData.presentationType,
    registerFormData.nights,
    registerFormData.guests,
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRegisterFormData((prev) => ({ ...prev, [name]: parseInt(value) || value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setRegisterFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (registerFormData.captcha.toLowerCase() !== captchaCode.toLowerCase()) {
      alert('Invalid CAPTCHA code');
      return;
    }

    if (!pricing) {
      alert('Pricing details are not available. Please try again.');
      return;
    }

    console.log('Register Form submitted:', { ...registerFormData, pricing });
    setShowModal(true);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Select Accommodation Type
        </label>
        <div className="accommodation-selectors">
          <select
            name="nights"
            value={registerFormData.nights}
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
            value={registerFormData.guests}
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

      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="accompanyingPerson"
            checked={registerFormData.accompanyingPerson}
            onChange={handleCheckboxChange}
            className="custom-checkbox"
          />
          Accompanying Person
        </label>
      </div>

      <div className="payment-summary">
        <h3 className="text-xl font-semibold mb-4">Payment Summary</h3>
        {pricingError && <p className="error-text mb-2">{pricingError}</p>}
        <div className="flex justify-between mb-2">
          <span>Processing Fee in $ (5% processing fee is applicable on total amount):</span>
          <span>{pricing ? `$${pricing.processingFee.toFixed(2)}` : 'TBD'}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Total Amount Payable in $:</span>
          <span>{pricing ? `$${pricing.totalAmount.toFixed(2)}` : 'TBD'}</span>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          By clicking "Pay Now", you confirm that you have read the terms and conditions, that you understand them and that you agree to be bound by them.
        </p>

        <div className="captcha-section">
          <span className="captcha-image">{captchaCode}</span>
          <span>Enter the code above here:</span>
          <input
            name="captcha"
            value={registerFormData.captcha}
            onChange={handleChange}
            required
            className="form-input w-32"
          />
          <span className="refresh-button" onClick={generateCaptcha}>
            🔄
          </span>
        </div>
      </div>

      <div className="pt-4 button-group">
        <button
          type="button"
          onClick={onBack}
          className="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
        >
          Back
        </button>
        <button
          type="button"
          onClick={resetForm}
          className="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
        >
          Reset Form
        </button>
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
        >
          Pay Now
        </button>
      </div>
    </form>
  );
};

export default PaymentInfoForm;