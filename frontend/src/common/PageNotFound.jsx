import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const history = useNavigate();

  const goToHome = () => {
    history('/home');
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("https://example.com/trek-404-background.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white p-6 max-w-lg">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8">
          Oops! It looks like the page you’re looking for doesn’t exist. Perhaps you took a wrong turn?
        </p>
        <button
          onClick={goToHome}
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
