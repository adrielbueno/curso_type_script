"use strict";
//---------------------------1-------------------------------//
const value1 = 3;
const value2 = 2;
console.log('Soma dos números ' + value1 + ' e ' + value2 + ' = ' + sum(value1, value2));
//---------------------------2-------------------------------//
const fiveNumbers = [5, 5, 5, 5, 10];
console.log('Media dos números ' + fiveNumbers + ' = ' + average(fiveNumbers));
const dataImc = {
    height: 1.82,
    weight: 90
};
console.log('Cálculo IMC ' + 'da altura ' + dataImc.height + ' e peso ' + dataImc.weight + ' = ' + computeImc(dataImc).toFixed(2));
//----------------------Funções---------------------------//
function sum(value1, value2) {
    return value1 + value2;
}
function average(numbers) {
    return sumArray(numbers) / numbers.length;
}
function sumArray(numbers) {
    let sum = 0;
    numbers.forEach(function (value) {
        sum += value;
    });
    return sum;
}
function computeImc(data) {
    return data.weight / data.height ** 2;
}
