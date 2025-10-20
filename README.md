# @saimcore/thousands-separator-js
A package to thousands separator

[![npm license](https://img.shields.io/npm/l/@saimcore/thousands-separator-js)](https://www.npmjs.com/package/@saimcore/thousands-separator-js)
[![npm version](https://img.shields.io/npm/v/@saimcore/thousands-separator-js)](https://www.npmjs.com/package/@saimcore/thousands-separator-js)
[![npm download](https://img.shields.io/npm/dt/@saimcore/thousands-separator-js)](https://www.npmjs.com/package/@saimcore/thousands-separator-js)
[![npm download per month](https://img.shields.io/npm/dm/@saimcore/thousands-separator-js)](https://www.npmjs.com/package/@saimcore/thousands-separator-js)
[![npm size](https://img.shields.io/npm/unpacked-size/@saimcore/thousands-separator-js)](https://www.npmjs.com/package/@saimcore/thousands-separator-js)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@saimcore/thousands-separator-js)](https://www.npmjs.com/package/@saimcore/thousands-separator-js)

## Install
```bash
npm i @saimcore/thousands-separator-js
```

## Usage
```javascript
console.log(thousandsSeparator(1000)); // 1,000
console.log(thousandsSeparator(1000, 2)); // 1,000.00
console.log(thousandsSeparator(1000, 2, '')); // 1000.00
console.log(thousandsSeparator(2750.50)); // 2,751
console.log(thousandsSeparator(2750.50, 1)); // 2,750.5
```
