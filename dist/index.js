// src/index.ts
var thousandsSeparator = (number, decimals = 0, sep = ",") => {
  try {
    if (number == null || isNaN(number)) {
      return "";
    }
    const decimalPlaces = Math.max(0, Math.floor(decimals));
    const fixed = number.toFixed(decimalPlaces);
    const [integerPart, decimalPart] = fixed.split(".");
    const withSeparator = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    return decimalPart ? `${withSeparator}.${decimalPart}` : withSeparator;
  } catch (err) {
    console.error(err);
    return "";
  }
};
export {
  thousandsSeparator
};
