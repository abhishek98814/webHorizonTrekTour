import React from 'react';

const InclusiveExclusive = () => {
  const trekDetails = {
    included: [
      "Airport transfers",
      "Accommodation in hotels and teahouses",
      "Breakfast, lunch, and dinner during the trek",
      "Professional English-speaking guide and porter",
      "Domestic flight from Kathmandu to Lukla and return",
      "All necessary permits for the trek",
      "Comprehensive medical and travel insurance",
      "Emergency evacuation service (if required)",
      "Oxygen for emergencies",
      "Trekking maps and itinerary"
    ],
    excluded: [
      "International airfare to and from Kathmandu",
      "Visa fees for Nepal",
      "Personal trekking equipment (e.g., shoes, backpacks, sleeping bags)",
      "Alcoholic beverages and soft drinks",
      "Hot showers during the trek",
      "Personal expenses (laundry, phone calls, etc.)",
      "Tips for the guide and porter",
      "Travel insurance covering non-trekking activities",
      "Any extra charges incurred due to early return from the trek"
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">What's Included & Excluded</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Included:</h3>
        <ul className="list-disc pl-6 text-gray-600">
          {trekDetails.included.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Excluded:</h3>
        <ul className="list-disc pl-6 text-gray-600">
          {trekDetails.excluded.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InclusiveExclusive;
