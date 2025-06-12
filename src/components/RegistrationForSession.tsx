import React, { useEffect, useState } from 'react';

interface PricingConfig {
  processingFee: number;
  totalAmount: number;
  pricingConfigId?: number;
}

interface PaymentConfig {
  paymentGateway: string;
  currency: string;
  transactionFee: number;
}

const PricingPreviewForm: React.FC = () => {
  const [form, setForm] = useState({
    prefix: '',
    name: '',
    phone: '',
    email: '',
    instituteOrUniversity: '',
    country: '',
    registrationType: 'REGISTRATION_ONLY',
    presentationType: 'STUDENT',
    nights: 1,
    guests: 1,
    accompanyingPerson: false,
    captcha: '',
  });

  const [pricing, setPricing] = useState<PricingConfig | null>(null);
  const [paymentConfig, setPaymentConfig] = useState<PaymentConfig | null>(null);
  const [captchaCode, setCaptchaCode] = useState('');
  const [error, setError] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const prefixOptions = ['Dr.', 'Mr.', 'Ms.', 'Mrs.', 'Prof.'];

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    const fetchPricingAndPaymentConfig = async () => {
      const { registrationType, presentationType, nights, guests } = form;

      const payload: any = {
        registrationType,
        presentationType,
      };

      if (registrationType === 'REGISTRATION_AND_ACCOMMODATION') {
        payload.numberOfNights = nights;
        payload.numberOfGuests = guests;
      }

      try {
        // Fetch Pricing Config
        const pricingResponse = await fetch('https://renewable-be.onrender.com/api/registration/get-pricing-config', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!pricingResponse.ok) throw new Error(`Pricing fetch failed: ${pricingResponse.status} ${pricingResponse.statusText}`);

        const pricingResult = await pricingResponse.json();

        if (!Array.isArray(pricingResult) || pricingResult.length === 0) throw new Error('No pricing found');

        const pricingItem = pricingResult[0];
        const base = pricingItem.presentationType?.price || 0;
        const acc = pricingItem.accommodationOption?.price || 0;
        const subtotal = base + acc;
        const processing = (subtotal * pricingItem.processingFeePercent) / 100;
        const total = subtotal + processing;

        setPricing({ processingFee: processing, totalAmount: total, pricingConfigId: pricingItem.id || 26 });

        // Fetch Payment Config
        const paymentResponse = await fetch('https://renewable-be.onrender.com/api/registration/get-payment-config', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!paymentResponse.ok) throw new Error(`Payment config fetch failed: ${paymentResponse.status} ${paymentResponse.statusText}`);

        const paymentResult = await paymentResponse.json();
        setPaymentConfig({
          paymentGateway: paymentResult.paymentGateway || 'Stripe',
          currency: paymentResult.currency || 'USD',
          transactionFee: paymentResult.transactionFee || 0,
        });

        setError('');
      } catch (err: any) {
        console.error('Fetch error:', err.message);
        setPricing(null);
        setPaymentConfig(null);
        setError(`Configuration unavailable: ${err.message}. Try again later.`);
      }
    };

    fetchPricingAndPaymentConfig();
  }, [form.registrationType, form.presentationType, form.nights, form.guests]);

  const validateFields = () => {
    const errors: Record<string, string> = {};
    const { prefix, name, phone, email, instituteOrUniversity, country, captcha } = form;

    if (!prefix) errors.prefix = 'Prefix is required';
    if (!name) errors.name = 'Name is required';
    if (!phone || !/^\+?\d{10,15}$/.test(phone)) errors.phone = 'Valid phone number (10-15 digits) is required';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Valid email is required';
    if (!instituteOrUniversity) errors.instituteOrUniversity = 'Institute/University is required';
    if (!country) errors.country = 'Country is required';
    if (!captcha) errors.captcha = 'CAPTCHA is required';

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const val = name === 'guests' || name === 'nights' ? Number(value) : value;
    setForm((prev) => ({ ...prev, [name]: val }));
    setFieldErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateFields()) {
      setRegistrationStatus('Please correct the form errors.');
      return;
    }

    if (form.captcha.toLowerCase() !== captchaCode.toLowerCase()) {
      setFieldErrors((prev) => ({ ...prev, captcha: 'Incorrect CAPTCHA' }));
      setRegistrationStatus('Incorrect CAPTCHA. Please try again.');
      return;
    }

    if (!pricing || !paymentConfig) {
      setRegistrationStatus('Pricing or payment configuration not available.');
      return;
    }

    const registrationPayload = {
      name: `${form.prefix} ${form.name}`.trim(),
      phone: form.phone,
      email: form.email,
      instituteOrUniversity: form.instituteOrUniversity,
      country: form.country,
      registrationType: form.registrationType,
      presentationType: form.presentationType,
      nights: form.registrationType === 'REGISTRATION_AND_ACCOMMODATION' ? form.nights : 0,
      guests: form.registrationType === 'REGISTRATION_AND_ACCOMMODATION' ? form.guests : 0,
      accompanyingPerson: form.accompanyingPerson,
      pricingConfig: { id: pricing.pricingConfigId || 26 },
      paymentConfig: {
        paymentGateway: paymentConfig.paymentGateway,
        currency: paymentConfig.currency,
        transactionFee: paymentConfig.transactionFee,
      },
      amountPaid: pricing.totalAmount + paymentConfig.transactionFee,
      registrationDate: new Date().toISOString(),
    };

    try {
      console.log('Sending registration payload:', registrationPayload);
      const response = await fetch('https://renewable-be.onrender.com/api/registration/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registrationPayload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Registration failed: ${response.status} ${response.statusText} - ${errorData.error || 'Unknown error'}`);
      }

      const result = await response.json();
      setRegistrationStatus(`✅ Registration successful! ID: ${result.id || 'N/A'}`);
      setForm({
        prefix: '',
        name: '',
        phone: '',
        email: '',
        instituteOrUniversity: '',
        country: '',
        registrationType: 'REGISTRATION_ONLY',
        presentationType: 'STUDENT',
        nights: 1,
        guests: 1,
        accompanyingPerson: false,
        captcha: '',
      });
      setFieldErrors({});
      generateCaptcha();
    } catch (err: any) {
      console.error('Registration error:', err.message);
      setRegistrationStatus(`❌ Registration failed: ${err.message}. Payload: ${JSON.stringify(registrationPayload)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto p-6 space-y-6 shadow-md bg-white rounded-xl">
        <h2 className="text-2xl font-bold text-center">Conference Registration</h2>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">User Details</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <select
                name="prefix"
                value={form.prefix}
                onChange={handleChange}
                className={`form-select w-full ${fieldErrors.prefix ? 'border-red-500' : ''}`}
                required
              >
                <option value="">Select Prefix</option>
                {prefixOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {fieldErrors.prefix && <p className="text-red-500 text-sm">{fieldErrors.prefix}</p>}
            </div>
            <div className="col-span-2">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className={`form-input w-full ${fieldErrors.name ? 'border-red-500' : ''}`}
                required
              />
              {fieldErrors.name && <p className="text-red-500 text-sm">{fieldErrors.name}</p>}
            </div>
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (e.g., +1234567890)"
              value={form.phone}
              onChange={handleChange}
              className={`form-input w-full ${fieldErrors.phone ? 'border-red-500' : ''}`}
              required
            />
            {fieldErrors.phone && <p className="text-red-500 text-sm">{fieldErrors.phone}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className={`form-input w-full ${fieldErrors.email ? 'border-red-500' : ''}`}
              required
            />
            {fieldErrors.email && <p className="text-red-500 text-sm">{fieldErrors.email}</p>}
          </div>
          <div>
            <input
              type="text"
              name="instituteOrUniversity"
              placeholder="Institute/University"
              value={form.instituteOrUniversity}
              onChange={handleChange}
              className={`form-input w-full ${fieldErrors.instituteOrUniversity ? 'border-red-500' : ''}`}
              required
            />
            {fieldErrors.instituteOrUniversity && <p className="text-red-500 text-sm">{fieldErrors.instituteOrUniversity}</p>}
          </div>
          <div>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={form.country}
              onChange={handleChange}
              className={`form-input w-full ${fieldErrors.country ? 'border-red-500' : ''}`}
              required
            />
            {fieldErrors.country && <p className="text-red-500 text-sm">{fieldErrors.country}</p>}
          </div>

          <h3 className="text-lg font-semibold">Registration Options</h3>
          <select
            name="registrationType"
            value={form.registrationType}
            onChange={handleChange}
            className="form-select w-full"
          >
            <option value="REGISTRATION_ONLY">Registration Only</option>
            <option value="REGISTRATION_AND_ACCOMMODATION">Registration + Accommodation</option>
          </select>

          <select
            name="presentationType"
            value={form.presentationType}
            onChange={handleChange}
            className="form-select w-full"
          >
            <option value="STUDENT">Student</option>
            <option value="RESEARCHER">Researcher</option>
            <option value="INDUSTRY">Industry</option>
          </select>

          {form.registrationType === 'REGISTRATION_AND_ACCOMMODATION' && (
            <div className="grid grid-cols-2 gap-4">
              <select
                name="nights"
                value={form.nights}
                onChange={handleChange}
                className="form-select"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Night{i > 0 ? 's' : ''}
                  </option>
                ))}
              </select>

              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="form-select"
              >
                {[...Array(5)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Guest{i > 0 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
          )}

          {form.registrationType === 'REGISTRATION_AND_ACCOMMODATION' && (
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="accompanyingPerson"
                checked={form.accompanyingPerson}
                onChange={handleCheckboxChange}
              />
              Include Accompanying Person
            </label>
          )}
        </div>

        <div className="border-t pt-4 mt-4 space-y-2">
          <h3 className="text-lg font-semibold">Pricing & Payment Summary</h3>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-between">
            <span>Processing Fee:</span>
            <span>{pricing ? `$${pricing.processingFee.toFixed(2)}` : 'TBD'}</span>
          </div>
          <div className="flex justify-between">
            <span>Transaction Fee:</span>
            <span>{paymentConfig ? `$${paymentConfig.transactionFee.toFixed(2)}` : 'TBD'}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total Amount:</span>
            <span>{pricing && paymentConfig ? `$${(pricing.totalAmount + paymentConfig.transactionFee).toFixed(2)}` : 'TBD'}</span>
          </div>
          {paymentConfig && (
            <div className="text-sm text-gray-600">
              <p>Payment Gateway: {paymentConfig.paymentGateway}</p>
              <p>Currency: {paymentConfig.currency}</p>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">CAPTCHA Verification</h3>
          <div className="flex items-center gap-4">
            <span className="bg-gray-100 font-mono px-4 py-2 rounded border text-lg">{captchaCode}</span>
            <input
              type="text"
              name="captcha"
              placeholder="Enter CAPTCHA"
              value={form.captcha}
              onChange={handleChange}
              className={`form-input w-full ${fieldErrors.captcha ? 'border-red-500' : ''}`}
              required
            />
            <button
              type="button"
              onClick={generateCaptcha}
              className="text-blue-500 text-sm hover:underline"
            >
              Refresh 🔄
            </button>
          </div>
          {fieldErrors.captcha && <p className="text-red-500 text-sm">{fieldErrors.captcha}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
          disabled={!pricing || !paymentConfig}
        >
          Submit & Register
        </button>

        {registrationStatus && (
          <p className={`text-center ${registrationStatus.includes('successful') ? 'text-green-600' : 'text-red-500'}`}>
            {registrationStatus}
          </p>
        )}
      </form>
    </div>
  );
};

export default PricingPreviewForm;