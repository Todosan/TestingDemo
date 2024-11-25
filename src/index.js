const express = require("express");

// import your api here
const carValueRoutes = require("./car-value-api/index");

const app = express();

// add your route after importing
app.use(carValueRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});
