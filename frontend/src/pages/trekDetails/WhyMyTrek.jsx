import React from 'react';
import eco from "/assets/eco.jpg";
import two from "/assets/fe.jpeg";
import firstAid from "/assets/firstAid.jpg";
import slide1 from "/assets/slide1.jpg";
import slide2 from "/assets/slide2.jpg";
import slide3 from "/assets/slide3.jpg";

const WhyChooseUs = () => {
  return (
    <div className="my-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Why People Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
          <img
            src={eco}
            alt="Expert Guides"
            className="mb-4 rounded-full object-cover w-24 h-24"
          />
          <h3 className=" font-bold mb-2">Expert Guides</h3>
          <p className="text-gray-600 text-sm">
            Our expert guides provide unparalleled knowledge and ensure your safety, making every trek memorable.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
          <img
            src={two}
            alt="Personalized Itineraries"
            className="mb-4 rounded-full object-cover w-24 h-24"
          />
          <h3 className=" font-bold mb-2">Personalized Itineraries</h3>
          <p className="text-gray-600 text-sm">
            We offer customized trekking routes that align with your preferences, fitness levels, and time frame.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
          <img
            src={firstAid}
            alt="Safety First"
            className="mb-4 rounded-full object-cover w-24 h-24"
          />
          <h3 className=" font-bold mb-2">Safety First</h3>
          <p className="text-sm text-gray-600">
            We prioritize safety with thorough pre-trip preparation, experienced guides, and reliable equipment.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
          <img
            src={slide1}
            alt="Eco-Friendly Practices"
            className="mb-4 rounded-full object-cover w-24 h-24"
          />
          <h3 className=" font-bold mb-2">Eco-Friendly Practices</h3>
          <p className="text-sm text-gray-600">
            We are committed to minimizing our environmental impact with sustainable trekking practices.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
          <img
            src={slide2}
            alt="Affordable Packages"
            className="mb-4 rounded-full object-cover w-24 h-24"
          />
          <h3 className="font-bold mb-2">Affordable Packages</h3>
          <p className="text-sm text-gray-600">
            Our trekking packages are designed to fit your budget without compromising on quality or experience.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
          <img
            src={slide3}
            alt="Client Testimonials"
            className="mb-4 rounded-full object-cover w-24 h-24"
          />
          <h3 className=" font-bold mb-2">Client Testimonials</h3>
          <p className="text-sm text-gray-600">
            Our clients rave about their trekking experiences with us. Check out the testimonials and reviews!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
