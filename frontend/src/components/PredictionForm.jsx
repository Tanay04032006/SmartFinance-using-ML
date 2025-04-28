import { useState } from "react";

const PredictionForm = ({ setPredictedSavings }) => {
  const [formData, setFormData] = useState({
    income: "",
    food: "",
    rent: "",
    utilities: "",
    entertainment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/predict-savings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.predictedSavings) {
      setPredictedSavings(data.predictedSavings);
    } else {
      alert(data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
      <h2 className="text-xl font-semibold text-center text-gray-800">Predict Your Savings</h2>
      <div className="space-y-4">
        <input
          type="number"
          name="income"
          placeholder="Income"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="number"
          name="food"
          placeholder="Food Expenses"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="number"
          name="rent"
          placeholder="Rent"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="number"
          name="utilities"
          placeholder="Utilities"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="number"
          name="entertainment"
          placeholder="Entertainment"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <button
        type="submit"
        className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Predict Savings
      </button>
    </form>
  );
};

export default PredictionForm;
