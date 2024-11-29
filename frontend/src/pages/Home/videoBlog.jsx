import React from 'react';

const YouTubeVlogLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex flex-col lg:flex-row">
        
      <div className="lg:w-1/2 p-4">
  <div className="relative">
    <iframe 
      width="100%" 
      height="300" 
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
      title="Mountain Trek Adventure in the Himalayas"
      className="rounded-lg"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    ></iframe>
  </div>
  <div className="mt-4">
    <h2 className="text-xl font-semibold text-gray-800">
      Mountain Trek Adventure in the Himalayas
    </h2>
    <p className="text-gray-600 text-sm mt-1">Published on Oct 5, 2024</p>
    <div className="flex justify-between mt-2">
      <span className="text-gray-800 text-sm">320,000 views</span>
      <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
        Subscribe
      </button>
    </div>
  </div>
</div>


        <div className="hidden lg:block w-px bg-gray-200"></div>

        <div className="lg:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Himalayan Trek Adventure</h2>
          <p className="text-gray-700 mb-3">
            Day 1: Kathmandu to Lukla. I arrived in Kathmandu feeling excited yet slightly nervous. It was my first time embarking on a journey to the mighty Himalayas. Early the next morning, I boarded a small aircraft bound for Lukla, often dubbed one of the most dangerous airports in the world.
          </p>
          <p className="text-gray-700 mb-3">
            Upon landing, the cool mountain air hit me. I felt alive, eager to begin the trek. As we hiked through charming villages like Phakding, the trail revealed lush greenery and the Dudh Koshi River gushing beside us. Every turn felt like a postcard.
          </p>
          <p className="text-gray-700 mb-3">
            Day 3: Trek to Namche Bazaar. The ascent to Namche Bazaar was no joke. Steep inclines, combined with the thin air at higher altitudes, made it tough. But as I reached the top, I could see why they call Namche the “Gateway to Everest.” Snow-capped peaks surrounded us, and the bustling town was a hub for trekkers and mountaineers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVlogLayout;
