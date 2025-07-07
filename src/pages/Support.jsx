import React from 'react';

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Left - Contact Info */}
        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 p-10 md:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in touch</h2>
          <p className="text-gray-600 mb-10">
            Proin volutpat consequat porttitor cras nullam gravida at.
            Orci molestie a eu arcu. Sed ut tincidunt integer elementum
            id sem. Arcu sed malesuada et magna.
          </p>

          <div className="space-y-6 text-gray-700 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-xl">🏢</span>
              <p>
                545 Mavis Island<br />
                Chicago, IL 99191
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <a href="tel:+15552345678" className="hover:text-indigo-600 transition">
                +1 (555) 234-5678
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">✉️</span>
              <a href="mailto:hello@example.com" className="hover:text-indigo-600 transition">
                hello@example.com
              </a>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="p-10 md:p-12 bg-white">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
