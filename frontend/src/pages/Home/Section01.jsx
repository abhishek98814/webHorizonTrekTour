import React from 'react';
import slide1 from "/assets/slide1.jpg";
import slide2 from "/assets/slide2.jpg";
import slide3 from "/assets/slide3.jpg";

const Section01 = () => {
  const bestTreks = [
    {
      id: 1,
      name: "Everest Base Camp Trek",
      description: "A classic trek that offers breathtaking views of Everest.",
      difficulty: "Hard",
      price: "$1500",
      image: slide1,
    },
    {
      id: 2,
      name: "Annapurna Circuit Trek",
      description: "A stunning journey through the heart of the Himalayas.",
      difficulty: "Moderate",
      price: "$1200",
      image: slide2,
    },
    {
      id: 3,
      name: "Langtang Valley Trek",
      description: "A beautiful trek with scenic views of Langtang mountains.",
      difficulty: "Moderate",
      price: "$1000",
      image: slide3,
    },
    {
      id: 4,
      name: "Manaslu Circuit Trek",
      description: "An off-the-beaten-path trek offering exceptional views.",
      difficulty: "Hard",
      price: "$1700",
      image: slide1,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-bold text-center text-3xl mb-8 text-gray-900">
        Best Treks of 2023
      </h1>
      <div className="bg-gray-600 p-6 rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestTreks.map((trek) => (
            <div
              key={trek.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={trek.image}
                  alt={trek.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`
                      px-3 py-1 rounded-full text-sm font-semibold
                      ${trek.difficulty === 'Hard' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-gray-900'}
                    `}
                  >
                    {trek.difficulty}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-bold text-xl text-gray-900 mb-2">
                  {trek.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4 h-12">
                  {trek.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-2xl text-gray-900">
                    {trek.price}
                  </span>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 font-semibold">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section01;
