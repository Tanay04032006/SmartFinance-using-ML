const express = require("express");
const { predictSavings, forecastFoodExpenses } = require("../controllers/predictionController");

const router = express.Router();

// Endpoint for predicting savings
router.post("/predict-savings", (req, res) => {
  const { income, food, rent, utilities, entertainment } = req.body;

  if (!income || !food || !rent || !utilities || !entertainment) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const predictedSavings = predictSavings(income, food, rent, utilities, entertainment);
  res.json({ predictedSavings });
});

// Endpoint for forecasting food expenses
router.get("/forecast-food-expenses", (req, res) => {
  const forecast = forecastFoodExpenses();
  res.json({ forecast });
});

module.exports = router;
