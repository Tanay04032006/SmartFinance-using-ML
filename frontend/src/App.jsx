import { useState } from "react";
import PredictionForm from "./components/PredictionForm";
import Forecast from "./components/Forecast";

function App() {
  const [predictedSavings, setPredictedSavings] = useState(null);

  return (
    <div className="App bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Smart Finance Tracker
        </h1>

        {/* Flex container to display both components side by side and center them */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
          {/* Prediction Form */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-md">
              <PredictionForm setPredictedSavings={setPredictedSavings} />
              {predictedSavings && (
                <h2 className="text-2xl text-center text-green-600 mt-6">
                  Predicted Savings: <span className="font-bold">${predictedSavings.toFixed(2)}</span>
                </h2>
              )}
            </div>
          </div>

          {/* Forecast */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-md">
              <Forecast />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
