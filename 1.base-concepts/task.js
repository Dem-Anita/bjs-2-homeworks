"use strict";

let a = -3;
let b = 4;
let c = 2;

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    arr = [];
    console.log(`Корней нет: ${arr}`);
  } else if (d === 0) {
    arr = [-b / (2 * a)];
    console.log(arr);
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
    console.log(arr);
  }
  return arr;
}

solveEquation(a, b, c);

let percent = 5;
let contribution = 300000;
let amount = 5000000;
let countMonths = 120;

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let payment = amount - contribution;
  let monthlyPayment = payment * (p + p / ((1 + p) ** countMonths - 1));
  let totalAmount = monthlyPayment * countMonths;
  let result = +totalAmount.toFixed(2);
  console.log(result);
  return result;
}
calculateTotalMortgage(percent, contribution, amount, countMonths);
