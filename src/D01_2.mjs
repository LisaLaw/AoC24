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

let totalSimilarity = 0;
let alreadyCheckedNumbers = [];

leftNumbers.forEach((leftNumber) => {
  if (alreadyCheckedNumbers.includes(leftNumber)) {
    return;
  }

  alreadyCheckedNumbers = [...alreadyCheckedNumbers, leftNumber]

  const occurencesInRightNumber = rightNumbers.filter(rightNumber => rightNumber === leftNumber);
  let similarity = 0;

  if (occurencesInRightNumber.length) {
    similarity = leftNumber * occurencesInRightNumber.length;
  }

  totalSimilarity += similarity;
});

console.log('distance', totalSimilarity);