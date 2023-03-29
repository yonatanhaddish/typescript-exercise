"use strict";
let sales = 123456789;
let sales02 = 123456789;
let course = "TypeScript";
let course02 = "TypeScript";
let is_published = true;
let is_published02 = true;
let level;
let numbers = [1, 2, 3];
numbers.forEach(n => console.log(n.toExponential));
let user = [1, 'Yoni'];
const small = 1;
const medium = 2;
const large = 3;
let mySize = 3;
console.log(mySize);
function calculateTax(income, taxYear = 2020) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calculateTax(10000));
let employee01 = {
    id: 1,
    name: 'Mosh',
    retire: (date) => { console.log(date); }
};
console.log(employee01);
let employee02 = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
let employee03 = {
    id: 2,
    name: 'Yon',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
;
console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else
        console.log('Hola');
}
;
greet('yoni');
greet(null);
greet(undefined);
let fruitOne = {
    name: 'Mango',
    taste: 'Sweet',
    color: 'Yellow',
    allSeason: false,
    price: 10
};
let fruitTwo = {
    name: 'Orange',
    taste: 'Sweet-tart',
    color: 'Orange',
    allSeason: false
};
function getPrice(price) {
    return price + 2.6;
}
;
console.log(getPrice(fruitOne.price));
console.log(getPrice(fruitTwo.price));
//# sourceMappingURL=index.js.map