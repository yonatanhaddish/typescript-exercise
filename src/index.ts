// -------------------------------------------------------------
// primitives
// -------------------------------------------------------------
let sales: number = 123_456_789;
let sales02 = 123_456_789;

let course: string = "TypeScript";
let course02 = "TypeScript";

let is_published: boolean = true;
let is_published02 = true;

let level;
// -------------------------------------------------------------
// arrays
// -------------------------------------------------------------
let numbers: number[] = [1, 2, 3];
numbers.forEach(n => console.log(n.toExponential))
// -------------------------------------------------------------
// tuples
// -------------------------------------------------------------
let user: [number, string] = [1, 'Yoni'];
// -------------------------------------------------------------
// enums
// -------------------------------------------------------------
const small = 1;
const medium = 2;
const large = 3;

const enum Size {
    Small = 1,
    Medium, // by default Medium will be 2, which is the number coming after 1
    Large   // by default Large will be 3, which is the number coming after 2
}
let mySize: Size = Size.Large;
console.log(mySize);
// -------------------------------------------------------------
// functions
// -------------------------------------------------------------
function calculateTax(income: number, taxYear = 2020): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calculateTax(10000));
// -------------------------------------------------------------
// objects (NOT RECOMMENDED)
// -------------------------------------------------------------
let employee01: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => { console.log(date) }
    
}
console.log(employee01);
// -------------------------------------------------------------
// objects (RECOMMENDED)
// -------------------------------------------------------------
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}
let employee02: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);
    }
};
let employee03: Employee = {
    id: 2,
    name: 'Yon',
    retire: (date: Date) => {
        console.log(date);
    }
};
// -------------------------------------------------------------
// unions
// -------------------------------------------------------------
function kgToLbs(weight: number | string): number {

    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
};

console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));
// -------------------------------------------------------------
// intersection
// -------------------------------------------------------------
type Draggable = {
    drag: () => void
};
type Resizable = {
    resize: () => void
};
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
};
// -------------------------------------------------------------
// literal types (exact or specific)
// -------------------------------------------------------------
type Quantity = 50 | 100;
let quantity: Quantity = 50; // true
// let quantity02: Quantity = 101 // false (error) 

type Metric = 'cm' | 'inch';
// -------------------------------------------------------------
// nullable types (null or undefined values)
// -------------------------------------------------------------
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else    
    console.log('Hola');
    
};
greet('yoni');
greet(null);
greet(undefined);
// -------------------------------------------------------------
// optional property access operator,
// optional element access operator,
// optional call
// NaN
// -------------------------------------------------------------
 type Fruit = {
    name: string,
    taste: string,
    color: string,
    allSeason: boolean,
    price?: number | undefined
 };

 let fruitOne: Fruit = {
    name: 'Mango',
    taste: 'Sweet',
    color: 'Yellow',
    allSeason: false,
    price: 10
 };
 let fruitTwo: Fruit = {
    name: 'Orange',
    taste: 'Sweet-tart',
    color: 'Orange',
    allSeason: false
 };

 function getPrice(price: number) {
    return price + 2.6;
 };
 console.log(getPrice(fruitOne.price!));
 console.log(getPrice(fruitTwo.price!));
 

//  console.log(fruitOne.price);
//  console.log(fruitTwo.price);

 
