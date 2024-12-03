import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

let leftNumbers = [];
let rightNumbers = [];

inputData.forEach(doubleInput => {
  let splitInput = doubleInput.split('  ');
  leftNumbers = [...leftNumbers, Number(splitInput[0])];
  rightNumbers = [...rightNumbers, Number(splitInput[1])];
});

leftNumbers.sort();
rightNumbers.sort();

let totalDistance = 0;

leftNumbers.forEach((leftNumber, index) => {
  const smallerNumber = Math.min(leftNumber, rightNumbers[index]);
  const biggerNumber = Math.max(leftNumber, rightNumbers[index]);
  const distance = biggerNumber - smallerNumber;

  totalDistance += distance;
});

console.log('distance', totalDistance);