//---------------------------1-------------------------------//
const value1: number = 3;
const value2: number = 2;

console.log('Soma dos números '  + value1 + ' e ' + value2 + ' = ' +  sum(value1, value2));


//---------------------------2-------------------------------//
const fiveNumbers: number[] = [5,5,5,5,10];

console.log('Media dos números ' + fiveNumbers + ' = ' + average(fiveNumbers));


//---------------------------3-------------------------------//
type People = {
  height: number,
  weight: number;
};

const dataImc: People = {
  height : 1.82,
  weight : 90
};

console.log('Cálculo IMC ' + 'da altura ' + dataImc.height + ' e peso ' + dataImc.weight + ' = ' + computeImc(dataImc).toFixed(2));


//----------------------Funções---------------------------//
function sum(value1: number, value2: number): number {
  return value1 + value2;
}

function average(numbers: number[]): number {
  return sumArray(numbers)/numbers.length;
}

function sumArray(numbers: number[]): number { 
  let sum: number = 0;
  numbers.forEach(function (value) {
      sum += value;
  });

  return sum;
}

function computeImc(data: People): number {
  return data.weight/data.height**2;
}