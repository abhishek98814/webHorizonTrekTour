import React from 'react';
import trekImage from '/assets/geg.jpeg';

const TrekOfTheYear = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Trek of the Year: The Everest Base Camp Trek
        </h2>
        <div className="relative mb-8">
          <img
            src={trekImage}
            alt="Everest Base Camp Trek"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <h3 className="text-4xl font-semibold text-center">Everest Base Camp Trek</h3>
          </div>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          Embark on the adventure of a lifetime! The Everest Base Camp Trek offers breathtaking views of the world's highest peaks, an immersion in Sherpa culture, and an unforgettable journey through Nepal’s Himalayas.
        </p>
        <a
          href="/treks/everest-base-camp"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default TrekOfTheYear;
