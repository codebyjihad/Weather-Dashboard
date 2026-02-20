import React from "react";
import { WiDaySunny, WiCloud, WiRain, WiSnow } from "react-icons/wi";

const WeatherCard = ({ city, temp, description }) => {
  // Optional: icon based on description
  const getWeatherIcon = () => {
    if (!description) return <WiDaySunny size={50} className="text-yellow-500" />;

    const desc = description.toLowerCase();
    if (desc.includes("cloud")) return <WiCloud size={50} className="text-gray-400" />;
    if (desc.includes("rain")) return <WiRain size={50} className="text-blue-500" />;
    if (desc.includes("snow")) return <WiSnow size={50} className="text-blue-200" />;
    return <WiDaySunny size={50} className="text-yellow-500" />;
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-6 flex items-center gap-5 hover:scale-105 transform transition-all duration-300">
      <div>{getWeatherIcon()}</div>

      <div className="border-l-2 border-gray-200 pl-5">
        <h2 className="text-xl font-bold text-gray-800">{city}</h2>
        <p className="text-gray-600 capitalize mt-1">{description || "Clear"}</p>
        <p className="text-3xl font-semibold mt-2">{temp ?? "--"}°C</p>
      </div>
    </div>
  );
};

export default WeatherCard;