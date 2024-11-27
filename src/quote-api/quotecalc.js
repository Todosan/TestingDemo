
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

const result = calculatePremium(carValue, driverRating);
console.log(result);
