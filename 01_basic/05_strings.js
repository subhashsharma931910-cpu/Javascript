const name = "subhash"
const repoCount = 50;

// Template Literal: backtick `` use karke variable ko directly string mein daalo
console.log(`hello my name is ${name} and my Repo Count is ${repoCount}`);

const gameName = "subhash";

console.log(gameName[0]);        // pehla character nikalta hai => "s"
console.log(gameName.__proto__); // string ka prototype object dikhata hai

// String Methods (built-in functions):
console.log(gameName.length);         // string ki total length batata hai => 7
console.log(gameName.toUpperCase())   // saare letters capital kar deta hai => "SUBHASH"
console.log(gameName.charAt(2));      // index 2 par jo character hai woh deta hai => "b"
console.log(gameName.indexOf('b'));   // 'b' pehli baar kis index par hai => 2

// substring(start, end): start se end tak characters nikalta hai (end include nahi hota)
const newName = gameName.substring(0, 4)
console.log(newName) // "subh"

// slice(start, end): substring jaisa, par negative index bhi le sakta hai
const anotherString = gameName.slice(-4, 4) // negative index matlab peeche se count karo
console.log(anotherString);

// trim(): string ke aage-peeche ke spaces hata deta hai
const newStringName = "    subhash   "
console.log(newStringName)        // spaces ke saath
console.log(newStringName.trim()) // spaces hata ke

const url = "https://subhash.com/subhash%20sharma"

// replace(purana, naya): string mein kuch replace karta hai
console.log(url.replace('%20', '-')); // %20 ki jagah - laga deta hai

// includes(text): check karta hai ki string mein yeh text hai ya nahi (true/false)
console.log(newStringName.includes('subhash')) // true
