const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const predictionRoutes = require("./routes/predictionRoutes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", predictionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
