const score = 400;
console.log(score);

// new Number(): number ko Number object mein wrap karta hai (extra methods milte hain)
const balance = new Number(100)

// toString(): number ko string mein convert karta hai
// console.log(balance.toString().length); // "100" ki length => 3

// toFixed(n): n decimal places tak round karta hai
// console.log(balance.toFixed(2)); // "100.00"

const otherName = 123.7896

// toPrecision(n): total n significant digits tak dikhata hai
// console.log(otherName.toPrecision(4)); // "123.8"

const hundreds = 1000000;
// toLocaleString('en-IN'): Indian number format mein dikhata hai (1,00,000)
// console.log(hundreds.toLocaleString('en-IN'));


// ==================== Math Object ====================
// Math: built-in object hai jo mathematical operations karta hai

console.log(Math);              // poora Math object dikhata hai
console.log(Math.abs(-4));      // absolute value: negative ko positive karta hai => 4
console.log(Math.round(4.6));   // nearest integer tak round karta hai => 5
console.log(Math.ceil(4.2));    // upar ki taraf round karta hai => 5
console.log(Math.floor(4.9));   // neeche ki taraf round karta hai => 4
console.log(Math.min(2, 5, 8, 3)); // sabse chhoti value deta hai => 2
console.log(Math.max(2, 5, 8, 3)); // sabse badi value deta hai => 8

// Math.random(): 0 se 1 ke beech random number deta hai (1 include nahi)
console.log(Math.random());
console.log((Math.random() * 10) + 1);              // 1 se 11 ke beech random number
console.log(Math.floor(Math.random() * 10) + 1);    // 1 se 10 ke beech random integer

// Kisi bhi range (min to max) mein random integer nikalne ka formula:
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 10 se 20 ke beech
