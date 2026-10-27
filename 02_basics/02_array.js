const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

// push se array ke andar array chala jaata hai (nested ban jaata hai) - avoid karo
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);       // ['thor','ironman','spiderman', ['superman','flash','batman']]
// console.log(marvel_heros[3],[1]); // nested array access karna

// concat(): do arrays ko jodta hai, NAYA array deta hai, originals nahi badlte
/*
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // ['thor','ironman','spiderman','superman','flash','batman']
*/

// Spread operator (...): concat ka modern tarika, arrays ko spread karke jodta hai
/*
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros) // ['thor','ironman','spiderman','superman','flash','batman']
*/


// ==================== flat() ====================
// flat(): nested array (array ke andar array) ko ek seedha array bana deta hai
// Infinity dene se kitni bhi gehri nesting ho, sab seedha ho jaata hai
const another_array = [1, 2, 3, [4, 5, 6], 7, [5, 6, 7, [8, 7, 6]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // [1,2,3,4,5,6,7,5,6,7,8,7,6]


// ==================== Array Utility Methods ====================

// Array.isArray(): check karta hai ki value array hai ya nahi (true/false)
console.log(Array.isArray('subhash')); // false - string hai, array nahi

// Array.from(): kisi bhi iterable (string, object) ko array mein convert karta hai
console.log(Array.from('subhash'));          // ['s','u','b','h','a','s','h'] - har letter alag element
console.log(Array.from({ name: "subhash" })); // [] - plain object se array nahi banta (interesting!)

// Array.of(): diye gaye values se seedha array bana deta hai
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
