let car = {
  brand: "BMW",
  model: "M5",
  year: 2020,
  averageSpeed: 100
};

let fraction1 = { numerator: 4, denominator: 8 };
let fraction2 = { numerator: 2, denominator: 6 };

let time = {
  hours: 10,
  minutes: 30,
  seconds: 15
};

function showCarInfo(car) {
  return `Марка: ${car.brand}, Модель: ${car.model}, Рік: ${car.year}, Швидкість: ${car.averageSpeed}`;
}

function travelTime(distance, speed) {
  let time = distance / speed;
  let breaks = Math.floor(time / 4);
  return time + breaks;
}

function addFractions(f1, f2) {
  return {
    numerator: f1.numerator * f2.denominator + f2.numerator * f1.denominator,
    denominator: f1.denominator * f2.denominator
  };
}

function subtractFractions(f1, f2) {
  return {
    numerator: f1.numerator * f2.denominator - f2.numerator * f1.denominator,
    denominator: f1.denominator * f2.denominator
  };
}

function multiplyFractions(f1, f2) {
  return {
    numerator: f1.numerator * f2.numerator,
    denominator: f1.denominator * f2.denominator
  };
}

function divideFractions(f1, f2) {
  return {
    numerator: f1.numerator * f2.denominator,
    denominator: f1.denominator * f2.numerator
  };
}

function simplifyFraction(f) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  let g = gcd(f.numerator, f.denominator);
  return { numerator: f.numerator / g, denominator: f.denominator / g };
}

function showTime(obj) {
  return `${obj.hours}:${obj.minutes}:${obj.seconds}`;
}

function changeSeconds(obj, value) {
  let total = obj.hours * 3600 + obj.minutes * 60 + obj.seconds + value;
  obj.hours = Math.floor(total / 3600);
  obj.minutes = Math.floor((total % 3600) / 60);
  obj.seconds = total % 60;
}

function changeMinutes(obj, value) {
  changeSeconds(obj, value * 60);
}

//1
console.log(showCarInfo(car));

//2
console.log(travelTime(850, car.averageSpeed));

//3
console.log(addFractions(fraction1, fraction2));

//4
console.log(subtractFractions(fraction1, fraction2));

//5
console.log(multiplyFractions(fraction1, fraction2));

//6
console.log(divideFractions(fraction1, fraction2));

//7
console.log(simplifyFraction(fraction1));

//8
console.log(showTime(time));

//9
changeSeconds(time, 75);

//10
changeMinutes(time, 2);
