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
let employee = {
    id: 1,
    name: 'Mosh',
    retire: (date) => { console.log(date); }
};
console.log(employee);
//# sourceMappingURL=index.js.map