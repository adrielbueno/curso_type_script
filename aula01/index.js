"use strict";
//---------------------------1-------------------------------//
const doisNumeros = [2, 3];
console.log('Soma de dois números: ' + sum(doisNumeros));
function sum(numbers) {
    return numbers[0] + numbers[1];
}
//---------------------------2-------------------------------//
const cincoNumeros = [5, 5, 5, 5, 5];
console.log('Media de cinco números: ' + average(cincoNumeros));
function average(numbers) {
    let avg = 0;
    numbers.forEach(function (value) {
        avg += value;
    });
    return avg / numbers.length;
}
const dadosImc = {
    altura: 1.82,
    peso: 90
};
console.log('Cálculo IMC: ' + computeImc(dadosImc).toFixed(2));
function computeImc(dados) {
    return dados.peso / dados.altura ** 2;
}
