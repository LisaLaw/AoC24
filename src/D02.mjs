import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

let reports =  [];

inputData.forEach(data => {
  reports = [...reports, data.split(' ')]
});

let safeReports = 0;

reports.forEach(report => {
  const isAscending = Number(report[0]) < Number(report[1]);
  const isDescending = Number(report[0]) > Number(report[1]);
  let isSafe = false;

  for (let i = 0; i < report.length; i++) {
    const currentLevel = Number(report[i]);
    const nextLevel = Number(report[i + 1]);

    if (currentLevel === nextLevel) {
      return isSafe = false;
    };

    if (isDescending && currentLevel > (nextLevel + 3)) {
      return isSafe = false
    };

    if (isAscending && currentLevel < (nextLevel - 3)) {
      return isSafe = false
    };

    if (isAscending && currentLevel > nextLevel) {
      return isSafe = false
    };

    if (isDescending && currentLevel < nextLevel) {
      return isSafe = false
    };

    isSafe = true;
  }

  if (isSafe === true) {
    safeReports += 1;
  }
})

console.log('safe reports:', safeReports);
