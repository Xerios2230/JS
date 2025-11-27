function compareNumbers(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

function factorial(n) {
  if (n < 0) return "Факторіал не існує!";
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return result;
}

function mergeDigits(a, b, c) {
  return Number(String(a) + b + c);
}

function rectangleArea(width, height = width) {
  return width * height;
}

function isPerfect(number) {
  if (number <= 1) return false;
  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) sum += i;
  }
  return sum === number;
}

function perfectInRange(min, max) {
  let result = [];
  for (let i = min; i <= max; i++) {
    if (isPerfect(i)) result.push(i);
  }
  return result;
}

function showTime(hours, minutes = 0, seconds = 0) {
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return `${hours}:${minutes}:${seconds}`;
}

function timeToSeconds(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
}

function secondsToTime(totalSeconds) {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;
  return showTime(hours, minutes, seconds);
}

function timeDifference(h1, m1, s1, h2, m2, s2) {
  const sec1 = timeToSeconds(h1, m1, s1);
  const sec2 = timeToSeconds(h2, m2, s2);
  const diff = Math.abs(sec1 - sec2);
  return secondsToTime(diff);
}

//1
console.log(compareNumbers(5, 3));

//2
console.log(factorial(5));

//3
console.log(mergeDigits(1, 4, 9));

//4
console.log(rectangleArea(5, 3));

//5
console.log(rectangleArea(4));

//6
console.log(isPerfect(28));

//7
console.log(perfectInRange(1, 1000));

//8
console.log(showTime(9, 5));

//9
console.log(timeToSeconds(2, 3, 10));

//10
console.log(timeDifference(12, 30, 0, 14, 0, 0));
