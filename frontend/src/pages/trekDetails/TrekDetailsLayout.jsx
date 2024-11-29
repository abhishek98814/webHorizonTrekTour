import React, { useState, useEffect } from 'react';
import Detail01 from "./Details01";
import DetailsFixed from "./DetailsFixed";
import Overview from "./Overview";
import Itinerary from "./Iternary";
import InclusiveExclusive from "./InclusiveExclusive";
import InfoLayout from "./TripInfo/InfoLayout";
import ReviewsSection from "./Review";
import TrekMapSection from "./TrekMap";
import WhyChooseUs from './WhyMyTrek';
import { Book, MapPin, CheckCircle, Info, Star, Map } from 'lucide-react';


const TrekDetailsLayout = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showHeader, setShowHeader] = useState(false);
  const [showFixedItem, setShowFixedItem] = useState(true); // State to toggle the visibility of DetailsFixed

  const handleScroll = () => {
    const itineraryElement = document.getElementById('itinerary');
    const inclusiveExclusiveElement = document.getElementById('inclusiveexclusive');
    
    if (itineraryElement && inclusiveExclusiveElement) {
      const itineraryRect = itineraryElement.getBoundingClientRect();
      const inclusiveExclusiveRect = inclusiveExclusiveElement.getBoundingClientRect();
      
      if (itineraryRect.top <= window.innerHeight && itineraryRect.bottom >= 0) {
        setShowHeader(true);  
      }

      if (inclusiveExclusiveRect.top > window.innerHeight) {
        setShowHeader(false); 
      }
    }

    const sections = ['overview', 'itinerary', 'inclusiveexclusive', 'info', 'reviews', 'map'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section);
        }
      }
    });

    // Toggle the visibility of DetailsFixed based on scroll position
    const overviewElement = document.getElementById('overview');
    const mapElement = document.getElementById('map');
    
    if (overviewElement && mapElement) {
      const overviewRect = overviewElement.getBoundingClientRect();
      const mapRect = mapElement.getBoundingClientRect();

      if (overviewRect.top <= 0 && mapRect.top > window.innerHeight) {
        setShowFixedItem(true);  // Show the fixed item when scrolling between overview and map
      } else {
        setShowFixedItem(false); // Hide the fixed item otherwise
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
    {showHeader && (
  <div className="fixed top-0 left-0 right-0 bg-white z-10 shadow-md">
    <div className="flex justify-center space-x-6 py-4">
      <button
        onClick={() => setActiveSection('overview')}
        className={`text-sm font-semibold ${activeSection === 'overview' ? 'bg-gray-300' : ''} px-4 py-2 rounded-lg hover:bg-gray-200 transition`}
      >
        <Book className="inline mr-2" />
        Overview
      </button>
      <button
        onClick={() => setActiveSection('itinerary')}
        className={`text-sm font-semibold ${activeSection === 'itinerary' ? 'bg-gray-300' : ''} px-4 py-2 rounded-lg hover:bg-gray-200 transition`}
      >
        <MapPin className="inline mr-2" />
        Itinerary
      </button>
      <button
        onClick={() => setActiveSection('inclusiveexclusive')}
        className={`text-sm font-semibold ${activeSection === 'inclusiveexclusive' ? 'bg-gray-300' : ''} px-4 py-2 rounded-lg hover:bg-gray-200 transition`}
      >
        <CheckCircle className="inline mr-2" />
        Inclusive & Exclusive
      </button>
      <button
        onClick={() => setActiveSection('info')}
        className={`text-sm font-semibold ${activeSection === 'info' ? 'bg-gray-300' : ''} px-4 py-2 rounded-lg hover:bg-gray-200 transition`}
      >
        <Info className="inline mr-2" />
        Info
      </button>
      <button
        onClick={() => setActiveSection('reviews')}
        className={`text-sm font-semibold ${activeSection === 'reviews' ? 'bg-gray-300' : ''} px-4 py-2 rounded-lg hover:bg-gray-200 transition`}
      >
        <Star className="inline mr-2" />
        Reviews
      </button>
      <button
        onClick={() => setActiveSection('map')}
        className={`text-sm font-semibold ${activeSection === 'map' ? 'bg-gray-300' : ''} px-4 py-2 rounded-lg hover:bg-gray-200 transition`}
      >
        <Map className="inline mr-2" />
        Map
      </button>
    </div>
  </div>
)}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-24">
        <div className="lg:col-span-3 mx-16">
          <div id="overview">
            <Detail01 />
          </div>

          <div id="itinerary" className="my-4">
            <Overview />
          </div>

          <div id="inclusiveexclusive" className="my-4">
            <Itinerary />
          </div>

          <div id="info" className="my-4">
            <InclusiveExclusive />
          </div>

          <div id="reviews" className="my-4">
            <InfoLayout />
          </div>

          <div id="map" className="my-4">
            <ReviewsSection />
          </div>

          <div className="my-4">
            <TrekMapSection />
          </div>
        </div>

        <div className="lg:col-span-1 lg:fixed lg:top-0 my-64 lg:right-0 lg:w-1/4">
          {/* Conditionally render the DetailsFixed component */}
          {showFixedItem && <DetailsFixed />}
        </div>
      </div>
    </div>
  );
};

export default TrekDetailsLayout;
