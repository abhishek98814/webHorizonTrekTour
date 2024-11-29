import React from 'react';

const TrekEquipment = () => {
  const equipment = {
    clothing: [
      'Moisture-wicking thermal top and bottom',
      'Lightweight long-sleeve shirt',
      'Short-sleeve t-shirts (quick-dry)',
      'Insulated jacket (down or synthetic)',
      'Fleece jacket or pullover',
      'Waterproof/windproof jacket and pants',
      'Trekking pants',
      'Thermal underwear (for high altitudes)',
      'Warm hat and sun hat',
      'Gloves (thermal and waterproof)',
      'Socks (wool or synthetic)',
    ],
    footwear: [
      'Trekking boots (waterproof, well broken-in)',
      'Camp shoes or sandals',
      'Gaiters (for snow or muddy trails)',
      'Trekking socks (multiple pairs)',
    ],
    gear: [
      'Backpack (50-70L) with a rain cover',
      'Sleeping bag (rated for -10°C to -20°C)',
      'Trekking poles',
      'Headlamp with extra batteries',
      'Water bottle or hydration bladder',
      'Sunglasses (UV protection)',
      'Trekking map and compass or GPS',
    ],
    personalItems: [
      'First aid kit (band-aids, pain relievers, antiseptics)',
      'Water purification tablets or filter',
      'Snacks (energy bars, nuts, chocolates)',
      'Sunscreen (SPF 50+)',
      'Lip balm with SPF',
      'Toiletries (toilet paper, toothbrush, toothpaste)',
      'Personal ID and necessary permits',
      'Cash (for local purchases)',
      'Portable charger/power bank',
    ],
    toiletries: [
      'Toilet paper',
      'Toothbrush and toothpaste',
      'Hand sanitizer',
      'Quick-dry towel',
      'Biodegradable soap',
      'Wet wipes',
      'Moisturizer and lotion',
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Trek Equipment Checklist</h2>
      
      {Object.keys(equipment).map((category) => (
        <div key={category} className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 uppercase mb-4">{category}</h3>
          <ul className="list-inside text-sm space-y-2 text-gray-600">
            {equipment[category].map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <span className="text-blue-500">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TrekEquipment;
