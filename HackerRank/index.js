const json1 = { hacker: "rank", input: "output" };
const json2 = { hacker: "ranked", input: "wrong" };

console.log(getJSONDiff(json1, json2));

function getJSONDiff(json1, json2) {
  // Write your code here
  let res = [];
  Object.keys(json1).forEach((e) => {
    Object.keys(json2).forEach((el) => {
      if (e === el) {
        if (json1[e] !== json2[el]) {
          res.push(e);
        }
      }
    });
  });
  return res.sort();
}

// --------------------------------------------------------------

const a = [4, 9, 95, 93, 57, 4, 57, 93, 9];

console.log(lonelyinteger(a));

function lonelyinteger(a) {
  // Write your code here
  let flag = 0,
    position = 0;
  for (let i = 0; i < a.length; i++) {
    flag = 1;
    for (let j = 0; j < a.length; j++) {
      if (i !== j) {
        if (a[i] === a[j]) {
          flag = 0;
        }
      }
    }
    if (flag !== 0) {
      position = i;
    }
  }
  return a[position];
}

// ----------------------------------------------------

arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(arr));

function diagonalDifference(arr) {
  // Write your code here
  let leftDiag = 0,
    rightDiag = 0;
  for (let m = 0; m < arr.length; m++) {
    leftDiag += arr[m][m];
  }
  let k = arr.length - 1;
  for (let m = 0; m < arr.length; m++) {
    for (let n = arr.length - 1; n >= 0; n--) {
      if (k == n) {
        rightDiag += arr[m][n];
      }
    }
    k--;
  }
  return Math.abs(leftDiag - rightDiag);
}

// -------------------------------------------------------------

let arr = [1, 1, 3, 2, 1];

console.log(countingSort(arr));

function countingSort(arr) {
  // Write your code here
  let res = [];
  for (let i = 0; i < 100; i++) {
    res[i] = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == i) {
        res[i] += 1;
      }
    }
  }
  return res;
}

// ----------------------------------------------------------------
/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
let candles = [4, 4, 1, 3];

birthdayCakeCandles(candles);

function birthdayCakeCandles(candles) {
  // Write your code here
  let candlesSorted = candles.sort((a, b) => b - a);
  let count = 1,
    highest = candlesSorted[0];
  for (let i = 1; i < candlesSorted.length; i++) {
    candlesSorted[i] == highest ? count++ : undefined;
  }
  console.log(count);
}

// --------------------------------------------------------

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

console.log(timeConversion("12:01:00PM"));

function timeConversion(s) {
  // Write your code here
  let amOrPm = s.slice(8, 10);
  let res = "";
  if (amOrPm == "AM") {
    if (s.slice(0, 2) == "12") {
      res = "00:" + s.slice(3, 8);
    } else {
      res = s.slice(0, 8);
    }
  } else {
    if (s.slice(0, 2) == "12") {
      res = s.slice(0, 8);
    } else {
      res = parseInt(s.slice(0, 2)) + 12 + s.slice(2, 8);
    }
  }
  return res;
}

// ----------------------------------------------------------

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      if ((grades[i] + 1) % 5 == 0) {
        grades[i] = grades[i] + 1;
      } else if ((grades[i] + 2) % 5 == 0) {
        grades[i] = grades[i] + 2;
      }
    }
  }
  return grades;
}

// -------------------------------------------------------------

// IBM question (adding element to array inside its own loop -- ONLY WHILE LOOP works)
// ------------

function countDelayedFlights(flightNodes, flightFrom, flightTo, delayed) {
  let res = [];
  let j = 0;
  while (j < delayed.length) {
    for (let i = 0; i < flightTo.length; i++) {
      if (flightTo[i] === delayed[j]) {
        if (!res.includes(flightTo[i])) {
          res.push(flightTo[i]);
        }
        if (!res.includes(flightFrom[i])) {
          res.push(flightFrom[i]);
        }
        if (!delayed.includes(flightFrom[i])) {
          delayed.push(flightFrom[i]);
        }
      }
    }
    j++;
  }
  res = res.sort();
  return res;
}

console.log(countDelayedFlights(4, [1, 2, 3, 1], [4, 1, 2, 3], [1, 2, 4]));
