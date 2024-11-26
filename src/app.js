const express = require("express");
const bodyParser = require("body-parser");

// import your api here
const carValueRoutes = require("./car-value-api/index");

// init Router
const apiRouter = express.Router();

// add routes to apiRouter here
apiRouter.use(carValueRoutes);

// start server
const app = express();

// middleware
app.use(bodyParser.json());

// rest api
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  console.log("/ endpoint was hit");
  res.status(200).json({ message: "Welcome to Turners Insurance API" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});
