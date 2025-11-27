// 1
function less(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// 2
function stepen(a, pow) {
    let result = 1;
    for (let i = 0; i < pow; i++) {
        result = result * a;
    }
    return result;
}

// 3
function calculator(a, b, operation) {
    if (operation === '+') {
        return a + b;
    } else if (operation === '-') {
        return a - b;
    } else if (operation === '*') {
        return a * b;
    } else if (operation === '/') {
        return a / b;
    } else {
        return 'Невідомий оператор';
    }
}

// 4
function prosteeChisla(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// 5
function tableMnozenya(a) {
    console.log('Таблиця множення для ' + a + ':');
    for (let i = 1; i <= 10; i++) {
        console.log(a + ' x ' + i + ' = ' + (a * i));
    }
}

// 1
console.log('Менше число: ' + less(5, 10));

// 2
console.log('4 у 3 ступені: ' + stepen(4, 3));

// 3
console.log('10 + 5 = ' + calculator(10, 5, '+'));
console.log('10 - 5 = ' + calculator(10, 5, '-'));
console.log('10 * 5 = ' + calculator(10, 5, '*'));
console.log('10 / 5 = ' + calculator(10, 5, '/'));

// 4
console.log('Число 7 просте? ' + prosteeChisla(7));
console.log('Число 10 просте? ' + prosteeChisla(10));

// 5
tableMnozenya(5);
