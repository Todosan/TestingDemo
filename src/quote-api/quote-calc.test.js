const calculatePremium = (carValue, driverRating) => {
    if (typeof carValue !== 'number' || carValue <= 0) {
        return "Error: Invalid car value.";
    }
    if (typeof driverRating !== 'number' || driverRating <= 0) {
        return "Error: Invalid driver rating.";
    }

    const yearlyPremium = (carValue * driverRating) / 100;
    const monthlyPremium = yearlyPremium / 12;

    return {
        yearlyPremium: yearlyPremium.toFixed(2),
        monthlyPremium: monthlyPremium.toFixed(2)
    };
};

describe("calculatePremium function", () => {
    test("should calculate premium correctly for valid inputs", () => {
        const result = calculatePremium(10000, 5);
        expect(result).toEqual({
            yearlyPremium: "500.00",
            monthlyPremium: "41.67"
        });
    });

    test("should return an error for invalid car value (negative number)", () => {
        const result = calculatePremium(-1000, 5);
        expect(result).toBe("Error: Invalid car value.");
    });

    test("should return an error for invalid driver rating (zero)", () => {
        const result = calculatePremium(10000, 0);
        expect(result).toBe("Error: Invalid driver rating.");
    });

    test("should return an error for non-numeric car value", () => {
        const result = calculatePremium("not-a-number", 5);
        expect(result).toBe("Error: Invalid car value.");
    });

    test("should return an error for non-numeric driver rating", () => {
        const result = calculatePremium(10000, "not-a-number");
        expect(result).toBe("Error: Invalid driver rating.");
    });
});
