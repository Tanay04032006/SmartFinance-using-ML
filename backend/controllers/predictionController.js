// const financialData = [
//   { income: 3000, food: 400, rent: 1000, utilities: 150, entertainment: 200, savings: 600 },
//   { income: 3200, food: 420, rent: 1000, utilities: 160, entertainment: 220, savings: 650 },
//   { income: 3400, food: 440, rent: 1000, utilities: 170, entertainment: 240, savings: 700 },
//   { income: 3600, food: 460, rent: 1000, utilities: 180, entertainment: 260, savings: 750 },
//   { income: 3800, food: 480, rent: 1000, utilities: 190, entertainment: 280, savings: 800 },
//   { income: 4000, food: 500, rent: 1000, utilities: 200, entertainment: 300, savings: 850 },
//   { income: 4200, food: 520, rent: 1000, utilities: 210, entertainment: 320, savings: 900 },
//   { income: 4400, food: 540, rent: 1000, utilities: 220, entertainment: 340, savings: 950 },
//   { income: 4600, food: 560, rent: 1000, utilities: 230, entertainment: 360, savings: 1000 },
//   { income: 4800, food: 580, rent: 1000, utilities: 240, entertainment: 380, savings: 1050 },
//   { income: 5000, food: 600, rent: 1000, utilities: 250, entertainment: 400, savings: 1100 },
//   { income: 5200, food: 620, rent: 1000, utilities: 260, entertainment: 420, savings: 1150 },
// ];

const MultivariateLinearRegression  = require('ml-regression-multivariate-linear');  // Corrected import

const financialData = [
  { income: 3000, food: 420, rent: 1000, utilities: 160, entertainment: 220, savings: 580 },
  { income: 3200, food: 435, rent: 1000, utilities: 165, entertainment: 230, savings: 640 },
  { income: 3400, food: 450, rent: 1000, utilities: 170, entertainment: 240, savings: 690 },
  { income: 3600, food: 470, rent: 1000, utilities: 180, entertainment: 250, savings: 740 },
  { income: 3800, food: 480, rent: 1000, utilities: 190, entertainment: 270, savings: 790 },
  { income: 4000, food: 495, rent: 1000, utilities: 200, entertainment: 290, savings: 850 },
  { income: 4200, food: 515, rent: 1000, utilities: 205, entertainment: 310, savings: 900 },
  { income: 4400, food: 530, rent: 1000, utilities: 215, entertainment: 320, savings: 950 },
  { income: 4600, food: 550, rent: 1000, utilities: 225, entertainment: 340, savings: 1000 },
  { income: 4800, food: 570, rent: 1000, utilities: 235, entertainment: 350, savings: 1050 },
  { income: 5000, food: 590, rent: 1000, utilities: 245, entertainment: 370, savings: 1100 },
  { income: 5200, food: 610, rent: 1000, utilities: 255, entertainment: 380, savings: 1150 },
  { income: 5400, food: 620, rent: 1000, utilities: 260, entertainment: 390, savings: 1200 },
  { income: 5600, food: 640, rent: 1000, utilities: 270, entertainment: 410, savings: 1250 },
  { income: 5800, food: 660, rent: 1000, utilities: 280, entertainment: 420, savings: 1300 },
  { income: 6000, food: 680, rent: 1000, utilities: 290, entertainment: 430, savings: 1350 },
  { income: 6200, food: 700, rent: 1000, utilities: 300, entertainment: 450, savings: 1400 },
  { income: 6400, food: 710, rent: 1000, utilities: 310, entertainment: 460, savings: 1450 },
  { income: 6600, food: 730, rent: 1000, utilities: 320, entertainment: 470, savings: 1500 },
  { income: 6800, food: 750, rent: 1000, utilities: 330, entertainment: 480, savings: 1550 },
  { income: 7000, food: 770, rent: 1000, utilities: 340, entertainment: 490, savings: 1600 },
  { income: 7200, food: 790, rent: 1000, utilities: 350, entertainment: 510, savings: 1650 },
  { income: 7400, food: 800, rent: 1000, utilities: 360, entertainment: 520, savings: 1700 },
  { income: 7600, food: 820, rent: 1000, utilities: 370, entertainment: 530, savings: 1750 },
  { income: 7800, food: 840, rent: 1000, utilities: 380, entertainment: 540, savings: 1800 },
  { income: 8000, food: 860, rent: 1000, utilities: 390, entertainment: 550, savings: 1850 },
  { income: 8200, food: 880, rent: 1000, utilities: 400, entertainment: 560, savings: 1900 },
  { income: 8400, food: 900, rent: 1000, utilities: 410, entertainment: 570, savings: 1950 },
  { income: 8600, food: 920, rent: 1000, utilities: 420, entertainment: 580, savings: 2000 },
  { income: 8800, food: 940, rent: 1000, utilities: 430, entertainment: 590, savings: 2050 },
];


// Predict Savings using MultivariateLinearRegression
const predictSavings = (income, food, rent, utilities, entertainment) => {
  const X = financialData.map((data) => [
    data.income,
    data.food,
    data.rent,
    data.utilities,
    data.entertainment,
  ]);
  const y = financialData.map((data) => [data.savings]); // Important: y must be 2D

  const regression = new MultivariateLinearRegression(X, y);
  const [prediction] = regression.predict([[income, food, rent, utilities, entertainment]]); // Input must be 2D array

  return prediction[0]; // Extract single predicted value
};

const forecastFoodExpenses = () => {
  const recentFoodExpenses = financialData.slice(-6).map((data) => data.food);
  const average = recentFoodExpenses.reduce((sum, expense) => sum + expense, 0) / recentFoodExpenses.length;

  const growthRate = 0.01; // 1% growth per month

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const today = new Date();
  const currentMonthIndex = today.getMonth(); // 0-based (0 = January)

  const forecast = Array.from({ length: 3 }, (_, i) => {
    const monthIndex = (currentMonthIndex + i + 1) % 12;
    const yearOffset = Math.floor((currentMonthIndex + i + 1) / 12);
    const month = monthNames[monthIndex] + (yearOffset > 0 ? ` ${today.getFullYear() + yearOffset}` : '');

    return {
      month,
      food: parseFloat((average * (1 + growthRate * i)).toFixed(2)),
    };
  });

  return forecast;
};


module.exports = { predictSavings, forecastFoodExpenses };
