"use strict";
//---------------------------1-------------------------------//
const twoNumbers = [3, 2];
console.log('Soma de dois números: ' + sum(twoNumbers));
function sum(numbers) {
    let sum = 0;
    numbers.forEach(function (value) {
        sum += value;
    });
    return sum;
}
//---------------------------2-------------------------------//
const fiveNumbers = [5, 5, 5, 5, 10];
console.log('Media de cinco números: ' + average(fiveNumbers));
function average(numbers) {
    return sum(numbers) / numbers.length;
}
const dataImc = {
    height: 1.82,
    weight: 90
};
console.log('Cálculo IMC: ' + computeImc(dataImc).toFixed(2));
function computeImc(data) {
    return data.weight / data.height ** 2;
}
