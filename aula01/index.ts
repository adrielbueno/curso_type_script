//---------------------------1-------------------------------//

const doisNumeros: number[] = [2,3];

console.log('Soma de dois números: ' + sum(doisNumeros));

function sum(numbers: number[]): number {
  return numbers[0] + numbers[1];
}

//---------------------------2-------------------------------//

const cincoNumeros: number[] = [5,5,5,5,5];

console.log('Media de cinco números: ' + average(cincoNumeros));

function average(numbers: number[]): number {
  let avg: number = 0;
  numbers.forEach(function (value) {
      avg += value;
  });

  return avg/numbers.length;
}

//---------------------------3-------------------------------//

type Pessoa = {
  altura: number,
  peso: number;
};

const dadosImc: Pessoa = {
  altura : 1.82,
  peso : 90
};

console.log('Cálculo IMC: ' + computeImc(dadosImc).toFixed(2));

function computeImc(dados: Pessoa): number {
  return dados.peso/dados.altura**2;
}