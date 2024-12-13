import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

let reports = [];

inputData.forEach((data) => {
  reports = [...reports, data.split(' ')];
});

let safeReportsNumber = 0;
let safeReportsNumber2 = 0;
let lastReport = ''

const isSafe = (report) => {
  const isAscending = Number(report[0]) < Number(report[1]);
  return report.every((level, index, arr) => {
    if (level === arr[index + 1]) return false;
    if (isAscending && level > Number(arr[index + 1])) return false;
    if (isAscending && level < Number(arr[index + 1]) - 3) return false;
    if (!isAscending && level < Number(arr[index + 1])) return false;
    if (!isAscending && level > Number(arr[index + 1]) + 3) return false;

    return true;
  });
};

reports.forEach((report) => {
  let isReportSafe = isSafe(report);

  if (isReportSafe === true) {
    safeReportsNumber += 1;
  }
});

const reportsToRecheck = reports.filter((report) => !isSafe(report));

reportsToRecheck.map((report) =>
  report.filter((l, i, arr) => {
    if (report === lastReport) {
      return;
    }
    if (l === arr[i + 1]) {
      return;
    }

    if (isSafe(report.toSpliced(i, 1))) {
      safeReportsNumber2 += 1;
      lastReport = report;
    }
  })
);

console.log('safe reports 2:', safeReportsNumber2);
console.log('total', safeReportsNumber + safeReportsNumber2);
