import React, { useState } from 'react';
import axios from 'axios';

const Support = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    buisness:'',
    work: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const validateField = (name, value) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        if (value.length < 2) return 'First name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Only alphabets are allowed';
        break;

      case 'lastName':
        if (!value.trim()) return 'Last name is required';
        if (value.length < 2) return 'Last name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Only alphabets are allowed';
        break;

      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!emailRegex.test(value)) return 'Invalid email format';
        break;
      case 'phoneNo':
        if (!value.trim()) return 'Phone number is required';
        if (!phoneRegex.test(value)) return 'Invalid 10-digit phone number';
        break;
      case 'buisness':
        if (!value.trim()) return 'Firm is required';
        if (value.length < 5) return 'Firm must be at least 5 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Only alphabets are allowed';
        break;  
      case 'work':
        if (!value) return 'Please select a work option';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message should be at least 10 characters';
        if (value.length > 20) return 'Message should not exceed 20 characters';
        break;
      default:
        return '';
    }

    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict special characters for names
    if ((name === 'firstName' || name === 'lastName' || name==='buisness') && /[^a-zA-Z\s]/.test(value)) {
      return; // Don't update if invalid char entered
    }
    if (name === 'phoneNo' && /[^0-9]/.test(value)) {
      return; // Block anything except digits
    }
    setFormData(prev => ({ ...prev, [name]: value }));

    // Live validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };


  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) newErrors[name] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    if (!validateForm()) return;

    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contacts`, formData, {
        withCredentials: true,
      });

      setSuccess('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        buisness:'',
        work: '',
        message: ''
      });
      setErrors({});
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Info */}
        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 p-10 md:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in touch</h2>
          <p className="text-gray-600 mb-10">
            Contact us for promotions, dance, choreography or editing.
          </p>
          <div className="space-y-6 text-gray-700 text-sm">
            <div className="flex gap-3"><span className="text-xl">🏢</span> Ayodhya Nagar, Amalner</div>
            <div className="flex gap-3"><span className="text-xl">📞</span> +91 77749 79820</div>
            <div className="flex gap-3"><span className="text-xl">✉️</span> Karansingpardeshi68@gmail.com</div>
          </div>
        </div>

        {/* Right Form */}
        <div className="p-10 md:p-12 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="John"
                />
                {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="Doe"
                />
                {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="9876543210"
              />
              {errors.phoneNo && <p className="text-red-600 text-sm">{errors.phoneNo}</p>}
            </div>
            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Enter Your Firm Name(Buisness)</label>
              <input
                type="text"
                name="buisness"
                value={formData.buisness}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="Enter Shop/ School/ Hospital etc.."
              />
              {errors.buisness && <p className="text-red-600 text-sm">{errors.buisness}</p>}
            </div>

            {/* Work */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Work</label>
              <select
                name="work"
                value={formData.work}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">-- Select Work --</option>
                <option value="Shop Promotion">Shop Promotion</option>
                <option value="Hospital Promotion">Hospital Promotion</option>
                <option value="Cafe Promotion">Cafe Promotion</option>
                <option value="Dance Learning">Dance Learning</option>
                <option value="Video Editing">Video Editing</option>
                <option value="YouTube Video Creation">YouTube Video Creation</option>
                <option value="Other">Other</option>
              </select>
              {errors.work && <p className="text-red-600 text-sm">{errors.work}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows="2"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="Write your message..."
              ></textarea>
              {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
            </div>

            {/* Status */}
            {success && <p className="text-green-600">{success}</p>}
            {error && <p className="text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
