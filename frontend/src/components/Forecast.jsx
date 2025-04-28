// Forecast.js - Only React code should go here
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Forecast = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      const response = await fetch("http://localhost:5000/api/forecast-food-expenses");
      const data = await response.json();
      setForecastData(data.forecast);
    };
    fetchForecast();
  }, []);

  const chartData = {
    labels: forecastData.map((forecast) => `Month ${forecast.month}`),
    datasets: [
      {
        label: "Food Expenses ($)",
        data: forecastData.map((forecast) => forecast.food),
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Food Expense Forecast for the Next 3 Months</h2>
      <ul className="space-y-2 mb-6">
        {forecastData.map((forecast, index) => (
          <li key={index} className="text-lg text-gray-700">
            {forecast.month}: <span className="font-bold">${forecast.food.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Forecast;
