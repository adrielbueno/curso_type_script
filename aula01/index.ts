//---------------------------1-------------------------------//

const twoNumbers: number[] = [3,2];

console.log('Soma de dois números: ' + sum(twoNumbers));

function sum(numbers: number[]): number { 
  let sum: number = 0;
  numbers.forEach(function (value) {
      sum += value;
  });

  return sum;
}

//---------------------------2-------------------------------//

const fiveNumbers: number[] = [5,5,5,5,10];

console.log('Media de cinco números: ' + average(fiveNumbers));

function average(numbers: number[]): number {
  return sum(numbers)/numbers.length;
}

//---------------------------3-------------------------------//

type People = {
  height: number,
  weight: number;
};

const dataImc: People = {
  height : 1.82,
  weight : 90
};

console.log('Cálculo IMC: ' + computeImc(dataImc).toFixed(2));

function computeImc(data: People): number {
  return data.weight/data.height**2;
}