const calculateCarValue = (car) => {
  const { model, year } = car;

  // checking input data types
  if (typeof model !== "string" || typeof year !== "number") {
    return { error: "Incorrect Datatypes for each property" };
  }

  // calculating sum of character positions
  const sumOfCharacters = () => {
    const characterArray = model.toUpperCase().split("");

    let sum = 0;
    for (const character of characterArray) {
      sum += character.charCodeAt(0) - 64; // src: gpt
    }
    return sum;
  };

  // calculating car value
  const carValue = sumOfCharacters() * 100 + year;

  return { car_value: carValue };
};

module.exports = calculateCarValue;
