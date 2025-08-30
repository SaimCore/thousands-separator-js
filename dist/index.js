// src/index.ts
var thousandsSeparator = (num, sep = ",") => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
};
export {
  thousandsSeparator
};
