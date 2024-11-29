import React, { useState } from 'react';
import { Mail, User, CheckCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    setIsSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Join Our Newsletter</h2>
        {isSubmitted ? (
          <div className="text-center">
            <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />
            <p className="text-xl font-semibold text-gray-700">Thank you for subscribing!</p>
            <p className="mt-2 text-gray-600">We've sent a confirmation email to your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                required
                placeholder="Full Name"
              />
            </div>
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                required
                placeholder="Email Address"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg py-3 px-4 hover:from-purple-600 hover:to-blue-600 transition duration-200 transform hover:scale-105"
            >
              Subscribe Now
            </button>
          </form>
        )}
        <p className="mt-6 text-center text-gray-600 text-sm">
          We respect your privacy. Read our{' '}
          <a href="#" className="text-purple-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;