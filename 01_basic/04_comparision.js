// ==================== Comparison Operators ====================

// console.log(2 > 1);  // true  - bada hai?
// console.log(2 >= 1); // true  - bada ya barabar hai?
// console.log(2 < 1);  // false - chhota hai?
// console.log(2 == 1); // false - barabar hai? (sirf value check karta hai)
// console.log(2 != 1); // true  - barabar nahi hai?

// String ko number se compare karte waqt JS string ko number mein convert karta hai
// console.log("2" > 1);  // true  ("2" => 2)
// console.log("02" > 1); // true  ("02" => 2)


// null ke saath comparison ka ajeeb behavior:
console.log(null > 0)  // false - null 0 se bada nahi
console.log(null == 0) // false - null sirf undefined ke barabar hota hai
console.log(null >= 0) // true  - yeh JS ka inconsistent behavior hai, dhyan rakho!

// undefined hamesha false/NaN deta hai comparisons mein
console.log(undefined == 0); // false

// === (Strict Equality): value AUR type dono check karta hai
// ==  (Loose Equality):  sirf value check karta hai, type convert kar leta hai
console.log("2" === 2); // false - string aur number alag types hain
