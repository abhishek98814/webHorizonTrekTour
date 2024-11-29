import React from 'react';

const DetailsFixed = () => {
  return (
    <div className="lg:fixed lg:right-8 lg:w-1/4 p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">US$ 2450</h1>
        <p className="text-gray-600 mb-4">Per Person</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-2 hover:bg-blue-700 transition">
          Book This Trip
        </button>
        <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition">
          Quick Inquiry
        </button>
      </div>

      <div className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Trip Details</h2>
        <p className="text-gray-600 text-sm">
          Duration: 7 Days <br />
          Difficulty: Moderate <br />
          Max Altitude: 4500m <br />
        </p>
        <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition mt-4">
          Learn More
        </button>
      </div>

 
    </div>
  );
};

export default DetailsFixed;
