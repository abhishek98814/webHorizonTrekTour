import React, { useState } from 'react';

const ReviewSection = () => {
  const reviews = [
    { id: 1, name: 'John Doe', location: 'USA', rating: 5, text: 'Amazing trek experience! Highly recommend it.' },
    { id: 2, name: 'Sarah Smith', location: 'UK', rating: 4, text: 'The views were breathtaking, and the trek was well organized.' },
    { id: 3, name: 'Rajesh Kumar', location: 'India', rating: 5, text: 'A once-in-a-lifetime adventure! Loved every moment.' },
    { id: 4, name: 'Maria Garcia', location: 'Spain', rating: 4, text: 'Beautiful landscapes and great guide. Worth every penny.' },
    { id: 5, name: 'David Lee', location: 'Canada', rating: 5, text: 'An unforgettable experience. I will definitely come back!' },
    { id: 6, name: 'Lina Tan', location: 'Singapore', rating: 4, text: 'The trek was challenging but rewarding. Excellent services!' },
    { id: 7, name: 'Michael Brown', location: 'Australia', rating: 5, text: 'The trek of a lifetime! So glad I did it.' },
    { id: 8, name: 'Sofia Zhang', location: 'China', rating: 4, text: 'Highly recommend this trek. A beautiful and challenging journey.' },
    { id: 9, name: 'Carlos Mendoza', location: 'Mexico', rating: 5, text: 'The perfect adventure for anyone who loves nature.' },
    { id: 10, name: 'Olivia White', location: 'USA', rating: 4, text: 'A beautiful trek with amazing views. Will return again!' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 5;
  
  const nextSlide = () => {
    if (currentIndex < reviews.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className="bg-gray-100 py-16 relative">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What Our Trekkers Say</h2>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition disabled:opacity-50"
        disabled={currentIndex === 0}
      >
        &#8592;
      </button>

      <div className="flex justify-center gap-4 overflow-hidden">
        {reviews.slice(currentIndex, currentIndex + itemsPerPage).map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-lg p-6 w-64 transition-transform duration-500 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">{review.text}</p>
            <div className="flex justify-center">
              {[...Array(review.rating)].map((_, index) => (
                <span key={index} className="text-yellow-500">★</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition disabled:opacity-50"
        disabled={currentIndex >= reviews.length - itemsPerPage}
      >
        &#8594;
      </button>
    </div>
  );
};

export default ReviewSection;