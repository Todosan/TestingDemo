// testing
router.get("/car-value", (req, res) => {
    res.json({
      message: "Testing Car Value API. Yay it works!",
    });
  });

function calculatePremium(carValue, driverRating) {
    // Validate inputs

    if (typeof carValue !== 'number' || carValue <= 0) {
        return "Error: Invalid car value.";
    }
    if (typeof driverRating !== 'number' || driverRating <= 0) {
        return "Error: Invalid driver rating.";
    }

    // Calculate yearly premium
    const yearlyPremium = (carValue * driverRating) / 100;

    // Calculate monthly premium
    const monthlyPremium = yearlyPremium / 12;

    return {
        yearlyPremium: yearlyPremium.toFixed(2), // Rounding to 2 decimal places
        monthlyPremium: monthlyPremium.toFixed(2) // Rounding to 2 decimal places
    };
}

// Example usage:
const carValue = 6614;
const driverRating = 5;

const result = calculatePremium(carValue, driverRating);
console.log(result);
