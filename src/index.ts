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
