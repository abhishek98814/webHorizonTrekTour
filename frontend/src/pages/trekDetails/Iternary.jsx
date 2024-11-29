import { useState } from "react";

const Itinerary = () => {
  const [isDay1Open, setIsDay1Open] = useState(false);
  const [isDay2Open, setIsDay2Open] = useState(false);
  const [isDay3Open, setIsDay3Open] = useState(false);
  const [isDay4Open, setIsDay4Open] = useState(false);
  const [isDay5Open, setIsDay5Open] = useState(false);
  const [isDay6Open, setIsDay6Open] = useState(false);

  const toggleDescription = (day) => {
    switch (day) {
      case 1:
        setIsDay1Open(!isDay1Open);
        break;
      case 2:
        setIsDay2Open(!isDay2Open);
        break;
      case 3:
        setIsDay3Open(!isDay3Open);
        break;
      case 4:
        setIsDay4Open(!isDay4Open);
        break;
      case 5:
        setIsDay5Open(!isDay5Open);
        break;
      case 6:
        setIsDay6Open(!isDay6Open);
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Trekking Itinerary</h2>

      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <span className=" font-semibold text-blue-500">Day 1</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Arrival in Kathmandu</h3>
          <button
            onClick={() => toggleDescription(1)}
            className="text-blue-500 mt-2"
          >
            {isDay1Open ? "Hide Description" : "Show Description"}
          </button>
          {isDay1Open && (
            <p className="text-gray-700 mt-2">
              Arrive in Kathmandu, where you will be met by our guide at the airport and transferred to your hotel.
              There will be a briefing about the trek and a chance to explore the city.
            </p>
          )}
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <span className="font-semibold text-blue-500">Day 2</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Fly to Lukla, Trek to Phakding</h3>
          <button
            onClick={() => toggleDescription(2)}
            className="text-blue-500 mt-2"
          >
            {isDay2Open ? "Hide Description" : "Show Description"}
          </button>
          {isDay2Open && (
            <p className="text-gray-700 mt-2">
              After breakfast, we take a scenic flight to Lukla. From here, we begin our trek to Phakding, a beautiful
              Sherpa village situated on the banks of the Dudh Koshi River.
            </p>
          )}
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <span className=" font-semibold text-blue-500">Day 3</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Trek to Namche Bazaar</h3>
          <button
            onClick={() => toggleDescription(3)}
            className="text-blue-500 mt-2"
          >
            {isDay3Open ? "Hide Description" : "Show Description"}
          </button>
          {isDay3Open && (
            <p className="text-gray-700 mt-2">
              Trek to Namche Bazaar, the gateway to the Everest region. The day’s trek takes us through dense forests
              and across the Dudh Koshi River, with our first glimpses of Everest and the surrounding peaks.
            </p>
          )}
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <span className="font-semibold text-blue-500">Day 4</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Acclimatization Day at Namche</h3>
          <button
            onClick={() => toggleDescription(4)}
            className="text-blue-500 mt-2"
          >
            {isDay4Open ? "Hide Description" : "Show Description"}
          </button>
          {isDay4Open && (
            <p className="text-gray-700 mt-2">
              This day is set aside for acclimatization to the high altitude. We can take a short hike to the Everest
              View Hotel for stunning panoramic views of Everest, Lhotse, and other surrounding peaks.
            </p>
          )}
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <span className="font-semibold text-blue-500">Day 5</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Trek to Tengboche</h3>
          <button
            onClick={() => toggleDescription(5)}
            className="text-blue-500 mt-2"
          >
            {isDay5Open ? "Hide Description" : "Show Description"}
          </button>
          {isDay5Open && (
            <p className="text-gray-700 mt-2">
              Today, we trek through beautiful forests to reach Tengboche. Along the way, you’ll be treated to
              spectacular views of Everest, Ama Dablam, and other peaks.
            </p>
          )}
        </div>
      </div>

      {/* Day 6 */}
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <span className="font-semibold text-blue-500">Day 6</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Trek to Dingboche</h3>
          <button
            onClick={() => toggleDescription(6)}
            className="text-blue-500 mt-2"
          >
            {isDay6Open ? "Hide Description" : "Show Description"}
          </button>
          {isDay6Open && (
            <p className="text-gray-700 mt-2">
              The trek continues towards Dingboche, a quiet village offering fantastic views of the surrounding peaks
              and a great place to relax and acclimatize.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
