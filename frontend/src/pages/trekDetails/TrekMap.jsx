import React from 'react';

const TrekMapSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Trek Location Map</h2>
      
      {/* Google Map Embed Section */}
      <div className="relative w-full h-80 overflow-hidden">
        {/* Replace the src with your Google Maps embed link */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.414785439679!2d86.9250!3d27.9881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196db8dcb0d1%3A0x39d2c3656e1790e9!2sEverest%20Base%20Camp%2C%20Nepal!5e0!3m2!1sen!2sus!4v1631614087347!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default TrekMapSection;
