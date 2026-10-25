"use strict"; // JS ko newer version ki tarah treat karta hai, strict rules laagu hote hain

// alert( 3 + 3 ) // browser mein kaam karta hai, Node.js mein nahi

let name = "subhash"      // string type
let age = 21              // number type
let isLoggedIn = false    // boolean type

// JavaScript ke 7 Primitive Data Types:
// number    => 2 ki power 53 tak (integers aur decimals)
// bigint    => bahut bade numbers ke liye
// string    => text, "" ya '' mein likha jaata hai
// boolean   => sirf true ya false
// null      => jaanbujhkar khaali value assign karna
// undefined => variable declare hua par value nahi di
// symbol    => unique identifier banana ke liye

// object => non-primitive, complex data store karta hai

// typeof: kisi bhi value ka data type batata hai
console.log(typeof "subhash"); // "string" print karega
console.log(typeof null);      // "object" print karega (JS ka ek purana bug hai yeh)
