// Вступ до JavaScript. Умови
// 1
let age = Number(prompt("Скільки вам років?"));
if (age >= 0 && age <= 12) {
    alert("Ви дитина.");
} else if (age > 12 && age <= 18) {
    alert("Ви підліток.");
} else if (age > 18 && age <= 61) {
    alert("Ви дорослий.");
} else {
    alert("Ви пенсіонер.");
}

// 2
let num = Number(prompt("Введіть число 0-9."))
switch(num){
    case 0:
        alert(")");
        break;
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    case 5:
        alert("%");
        break;
    case 6:
        alert("^");
        break;
    case 7:
        alert("&");
        break;
    case 8:
        alert("*");
        break;
    case 9:
        alert("(");
        break;
}

// 3
let num1 = Number(prompt("Введіть тризначне число:"));
let a = num1[0];
let b = num1[1];
let c = num1[2];

if (a === b || a === c || b === c) {
    alert("Є однакові цифри.");
} else {
    alert("Усі цифри різні.");
}

// 4
let year = prompt("Введіть рік:");

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    alert("Рік високосний.");
} else {
    alert("Рік не високосний.");
}

// 5
let num2 = prompt("Введіть п’ятизначне число:");
if (num2[0] === num2[4] && num2[1] === num2[3]) {
    alert("Це паліндром.");
} else {
    alert("Це не паліндром.");
}

// 6
let usd = Number(prompt("Введіть суму в USD:"));
let currency = prompt("В яку валюту конвертувати? (EUR, UAH, AZN)").toUpperCase();

let rateEUR = 0.92;
let rateUAH = 42.0;
let rateAZN = 1.7;

let result;

switch (currency) {
    case "EUR":
        result = usd * rateEUR;
        break;
    case "UAH":
        result = usd * rateUAH;
        break;
    case "AZN":
        result = usd * rateAZN;
        break;
    default:
        result = "Невідома валюта!";
}

alert("Результат: " + result);

// 7
let sum = Number(prompt("Введіть суму покупки:"));
let discount = 0;

if (sum >= 200 && sum < 300) {
    discount = 3;}
else if (sum >= 300 && sum < 500) {
    discount = 5;}
else if (sum >= 500) {
    discount = 7;}

let final = sum - (sum * discount / 100);
alert("Знижка: " + discount + "%. До сплати: " + final);

// 8
let circle = Number(prompt("Введіть довжину кола:"));
let square = Number(prompt("Введіть периметр квадрата:"));

let circleDiameter = circle / Math.PI;
let squareSide = square / 4;

if (circleDiameter <= squareSide) {
    alert("Коло поміститься у квадрат.");
} else {
    alert("Коло не поміститься у квадрат.");
}

// 9 
let score = 0;

let q1 = prompt("Столиця Франції?\n1 - Рим\n2 - Париж\n3 - Мадрид");
if (q1 == 2) score += 2;

let q2 = prompt("Скільки континентів на Землі?\n1 - 5\n2 - 6\n3 - 7");
if (q2 == 2) score += 2;

let q3 = prompt("Який океан найбільший?\n1 - Тихий\n2 - Атлантичний\n3 - Індійський");
if (q3 == 1) score += 2;

alert("Ви набрали " + score + " балів з 6 можливих!");

// 10
let day = Number(prompt("Введіть день:"));
let month = Number(prompt("Введіть місяць:"));
let year2 = Number(prompt("Введіть рік:"));

let date = new Date(year1, month - 1, day);
date.setDate(date.getDate() + 1);

alert("Наступна дата: " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear());
