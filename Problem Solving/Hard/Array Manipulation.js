// Question  -> https://www.hackerrank.com/challenges/crush/problem?h_r=profile
// Time complexity:  O(n)
// Solution learned from https://www.hackerrank.com/amansbhandari on discussion tab.
// He solved it in C++. I converted it to JavaScript

function arrayManipulation(n, queries) {
  const length = queries.length;
  const array = new Array(n + 1).fill(0);
  let max = 0;
  let temp = 0;

  for (let i = 1; i <= length; i++) {
    const start = queries[i - 1][0];
    const end = queries[i - 1][1];
    const value = queries[i - 1][2];

    array[start] += value;
    if (end + 1 <= n) array[end + 1] -= value;
  }

  for (let j = 1; j <= n; j++) {
    temp += array[j];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(
  arrayManipulation(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ])
);

// Result is 200
