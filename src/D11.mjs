import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').split(' ');

const getNewStones = (arrayOfStones) => {
  return arrayOfStones
    .map((stone) => {
      if (stone === '0') return '1';
      else if (stone.length % 2 === 0) {
        const firstHalf = stone.slice(0, stone.length / 2);
        const secondHalf = stone.slice(stone.length / 2, stone.length);

        // no zeros
        if (!secondHalf.match(/0/g)) {
          return [firstHalf, secondHalf];
        }

        // only zeros
        if (secondHalf.match(/[^1-9]/g).length === secondHalf.length) {
          return [firstHalf, '0'];
        }

        // 1 zero out of several digits
        else if (secondHalf.match(/^0\d+/g) || secondHalf.match(/0\d+\Z/g)) {
          return [firstHalf, secondHalf.replace(/0/, '')];
        }

        return [firstHalf, secondHalf];
      } else return (Number(stone) * 2024).toString();
    })
    .flat();
};

let newStones = inputData;
for (let i = 0; i < 25; i++) {
  newStones = getNewStones(newStones);
}

const total = newStones.length

console.log('length', total);
