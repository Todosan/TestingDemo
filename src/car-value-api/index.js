const express = require("express");
const router = express.Router();

// Example route: Get all car values (placeholder data)
router.get("/car-value", (req, res) => {
  res.json({
    message: "Testing Car Value API. Yay it works",
    data: [
      { id: 1, model: "Camry", year: 2020 },
      { id: 2, model: "Rav4", year: 2024 },
    ],
  });
});

module.exports = router;
