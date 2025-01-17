const calculateCarValue = require("./carValue");

describe("Car Value Calculation Tests", () => {
  test("Sunny Day Scenario - Camry 2015", () => {
    expect(calculateCarValue({ model: "Camry", year: 2015 })).toEqual({
      car_value: 8015,
    });
  });
});
