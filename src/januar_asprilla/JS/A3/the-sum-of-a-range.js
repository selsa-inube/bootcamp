console.log("/////The sum of a range/////");

function generateRange(start, end, step = 1) {
  let result = [];
  let condition = step > 0 ? (num) => num <= end : (num) => num >= end;

  for (let num = start; condition(num); num += step) {
    result.push(num);
  }

  return result;
}

function calculateSum(arr) {
  return arr.reduce((total, current) => total + current, 0);
}

console.log(generateRange(1, 10));
console.log(generateRange(5, 2, -1));
console.log(calculateSum(generateRange(1, 10)));
