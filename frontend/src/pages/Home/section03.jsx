import React from 'react';
import destination1 from "/assets/slide1.jpg";
import destination2 from "/assets/slide2.jpg";
import destination3 from "/assets/slide3.jpg";
import destination4 from '/assets/everest4.jpg'

const DestinationSection = () => {
  const destinations = [
    {
      id: 1,
      name: "Kathmandu Valley",
      description: "Explore the rich cultural heritage and breathtaking landscapes of the Kathmandu Valley.",
      image: destination1
    },
    {
      id: 2,
      name: "Pokhara",
      description: "A serene city with lakes and mountains, perfect for relaxation and adventure.",
      image: destination2
    },
    {
      id: 3,
      name: "Chitwan National Park",
      description: "Embark on a wildlife adventure in one of the most famous national parks in Nepal.",
      image: destination3
    },
    {
      id: 4,
      name: "Lumbini",
      description: "The birthplace of Buddha, offering a tranquil atmosphere for spiritual journeys.",
      image: destination4
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="font-bold text-center text-3xl mb-8 text-gray-900">Explore Our Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <div 
            key={destination.id} 
            className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative">
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-2">{destination.name}</h3>
              <p className="text-gray-600 text-sm mb-4 h-12">{destination.description}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationSection;
