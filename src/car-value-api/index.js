const express = require("express");
const router = express.Router();
const calculateCarValue = require("./tests/carValue");

// testing
router.get("/car-value", (req, res) => {
  res.json({
    message: "Testing Car Value API. Yay it works!",
  });
});

// route to calculate car value based on model and year
router.post("/car-value", (req, res) => {
  const { model, year } = req.body;

  if (!model || !year || model === "" || year === "") {
    return res.status(400).json({ error: "Model and year are required" });
  }

  const result = calculateCarValue({ model, year });

  if (result.error) {
    return res.status(400).json(result);
  }

  res.json(result);
});

module.exports = router;
