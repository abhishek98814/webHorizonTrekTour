import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Info } from 'lucide-react';

const TrekBooking = () => {
  const [selectedMonth, setSelectedMonth] = useState('October');
  const [selectedYear, setSelectedYear] = useState(2024);

  const includes = [
    'All (international and domestic) airport transfers on a tourist vehicle',
    'Twin-sharing/double accommodation in a 3-star hotel for 2 nights in Kathmandu including breakfast',
    'Twin-sharing guest house accommodation during the trek for 5 nights in the Everest Region',
    'All your standard meals during the trek (Breakfast, Lunch, and Dinner) including one hot drink',
    'Shared Helicopter tour in Khumbu region and drop off at Lukla',
    'Experienced, first-aid trained, government licensed, English-speaking trekking guide',
    'Permits for Sagarmatha/Everest National Park and TIMS',
    'Porters during the trek for carrying luggage (1 porter for every 2 clients)'
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6  rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Departures & Availability Card */}
          <div className="bg-white rounded-lg shadow-md mb-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold">Departures & Availability</h2>
            </div>
            <div className="p-6">
              <div className="flex gap-4 mb-6">
                <button className="bg-black text-white px-4 py-2 rounded">
                  Group Departures
                </button>
                <button className="bg-gray-100 px-4 py-2 rounded">
                  Private Trip
                </button>
              </div>

              <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg mb-6">
                <p className="text-sm">
                  Our groups are small with a minimum of 2 and a maximum of 14 people. 
                  If you are the only person booked for a particular departure, you have 
                  the option to either pay a supplement fee of USD 550 to maintain your 
                  solo departure or postpone the trip to a different date at no additional charge.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Select Departure Date</h3>
                <p className="text-gray-600 text-sm">Trip duration: 8 days</p>
              </div>

              <div className="flex justify-between items-center mb-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <ChevronLeft className="w-5 h-5" />
                  <span>October 2024</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <span>November 2024</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-center text-sm py-2 text-gray-600">{day}</div>
                ))}
                {Array.from({ length: 31 }, (_, i) => (
                  <button 
                    key={i + 1}
                    className={`text-center py-2 rounded hover:bg-gray-100 
                      ${(i + 1) % 7 === 0 ? 'text-gray-400' : 'text-gray-900'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

       
        </div>

      </div>
    </div>
  );
};

export default TrekBooking;