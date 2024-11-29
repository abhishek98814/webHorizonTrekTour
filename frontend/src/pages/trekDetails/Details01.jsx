import everest4 from "../../assets/everest4.jpg";
import { Clock, Mountain, Users, MapPin, Scale, Sun } from 'lucide-react';
import { fetchOverviewAsync } from "../../redux/overviewSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Detail01 = () => {
  const [shortDescription, setShortDescription] = useState({});
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { overviews, isLoading, error } = useSelector((state) => state.overview);

  useEffect(() => {
    dispatch(fetchOverviewAsync());
  }, [dispatch]);

  useEffect(() => {
    if (overviews.length > 0) {
      const data = overviews[0];
      setShortDescription(data?.shortDesc);
      setTitle(data?.title);
    }
  }, [overviews]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-6 bg-white shadow-md rounded-lg">
      <div className="text-center">
        <img src={everest4} alt="Trek Details" className="w-full h-72 object-cover" />
      </div>
      <h1 className="text-xl text-center font-bold text-gray-800 mb-4">{title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
       

        {/* Dynamic content */}
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm">
          <Clock className="h-6 w-6 text-blue-500 mb-2" />
          <span className="text-lg font-semibold">Trip Duration</span>
          <span className="text-gray-600">{shortDescription?.duration || "N/A"}</span>
        </div>

        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm">
          <Mountain className="h-6 w-6 text-blue-500 mb-2" />
          <span className="text-lg font-semibold">Max Altitude</span>
          <span className="text-gray-600">{shortDescription?.MaxAltitude || "N/A"}</span>
        </div>

        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm">
          <Users className="h-6 w-6 text-blue-500 mb-2" />
          <span className="text-lg font-semibold">Group Size</span>
          <span className="text-gray-600">{shortDescription?.memberGroup || "N/A"}</span>
        </div>

        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm">
          <MapPin className="h-6 w-6 text-blue-500 mb-2" />
          <span className="text-lg font-semibold">Start & End Point</span>
          <span className="text-gray-600">{shortDescription?.startEndpoint || "N/A"}</span>
        </div>

        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm">
          <Scale className="h-6 w-6 text-blue-500 mb-2" />
          <span className="text-lg font-semibold">Trip Difficulty</span>
          <span className="text-gray-600">{shortDescription.tripDifficulty || "N/A"}</span>
        </div>

        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm">
          <Sun className="h-6 w-6 text-blue-500 mb-2" />
          <span className="text-lg font-semibold">Best Season</span>
          <span className="text-gray-600">{shortDescription?.bestSeason || "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default Detail01;
