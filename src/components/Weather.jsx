import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import weatherBanner from "../assets/watherbanner.jpg";
import WeatherCard from "./WeatherCard";
import { fetchWeatherData, clearWeatherData } from "../redux/feature/weatherSlice";

const Weather = () => {
    const { weatherData, loading, error } = useSelector(
        (state) => state.weather
    );

    const [city, setCity] = useState("");
    const dispatch = useDispatch();

    const handleFetchWeather = (e) => {
        e.preventDefault();

        if (city.trim() === "") return;

        dispatch(fetchWeatherData(city));
        setCity("");
    };

    const handleClear = () => {
        dispatch(clearWeatherData());
    };

    return (
        <div className="bg-blue-300">
            <div className="px-6 py-20 container max-w-screen-lg mx-auto min-h-screen">
                <h1 className="text-3xl md:text-5xl font-bold text-center animate-pulse">
                    Weather Dashboard
                </h1>

                <div className="w-full flex justify-center mt-2">
                    <p className="bg-red-500 text-white inline-block p-2">
                        Enter Your city name
                    </p>
                </div>

                <div className="mt-4 flex justify-center">
                    <img
                        src={weatherBanner}
                        alt="weather banner"
                        className="w-70 h-60 rounded"
                    />
                </div>

                {/* form */}
                <form
                    onSubmit={handleFetchWeather}
                    className="my-6 flex flex-wrap gap-2 md:gap-4"
                >
                    <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        placeholder="enter your city"
                        className="flex-grow p-2 border rounded border-gray-300"
                    />

                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Search Weather
                    </button>

                    <button
                        type="button"
                        onClick={handleClear}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                    >
                        Clear
                    </button>
                </form>

                {/* loading & error */}
                {loading && (
                    <p className="text-center text-white font-semibold">
                        Loading...
                    </p>
                )}

                {error && (
                    <p className="text-center text-red-700 font-semibold">
                        {error}
                    </p>
                )}

                {/* weather card */}

                {weatherData && (
                    <WeatherCard
                        city={weatherData.name}
                        temp={weatherData.main?.temp}
                        description={weatherData.weather?.[0]?.description}
                    />
                )}
            </div>
        </div>
    );
};

export default Weather;