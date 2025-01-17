const express = require('express');
const router = express.Router();
const calculatePremium = require('./test/quotecalc.js')

// Function to calculate the premium

// API route to calculate insurance premium
router.post('/calculate-premium', (req, res) => {
    const { carValue, driverRating } = req.body;

    // Validate input
    if (carValue === undefined || driverRating === undefined) {
        return res.status(400).json({ error: "carValue and driverRating are required" });
    }

    // Calculate premium
    const result = calculatePremium(carValue, driverRating);

    // Handle response
    if (result.error) {
        return res.status(400).json(result);
    } else {
        res.json(result);
    }
});

module.exports = router;
