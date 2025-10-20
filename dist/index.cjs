"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  thousandsSeparator: () => thousandsSeparator
});
module.exports = __toCommonJS(index_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  thousandsSeparator
});
//# sourceMappingURL=index.cjs.map