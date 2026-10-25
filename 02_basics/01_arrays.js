// ==================== Arrays ====================
// Array: ek saath kai values ek variable mein store karna
// Index 0 se start hota hai

const myArr = [0, 1, 2, 3, 4, 5];          // number array
const myHeros = ['shaktiman', 'superman', 'ironman'] // string array

// new Array(): dusra tarika array banane ka
const myArr2 = new Array(1, 2, 3, 4)

// index se value access karna (0 se start hota hai)
console.log(myArr[5]); // 5 => index 5 par jo value hai


// ==================== Array Methods ====================

// push(value): array ke AAKHIR mein value add karta hai
// myArr.push(6)
// myArr.push(7)

// pop(): array ki AAKHIR wali value hata deta hai
// myArr.pop()

// unshift(value): array ke SHURU mein value add karta hai
// myArr.unshift(9)

// shift(): array ki PEHLI value hata deta hai
// myArr.shift()

// includes(value): check karta hai ki value array mein hai ya nahi (true/false)
// console.log(myArr.includes(9));

// indexOf(value): value kis index par hai woh batata hai (-1 agar nahi mili)
// console.log(myArr.indexOf(3));

// join(): array ki saari values ko ek string mein jod deta hai
// const newArr = myArr.join()
// console.log(myArr);   // original array
// console.log(newArr);  // "0,1,2,3,4,5" (string ban jaati hai)


// ==================== Slice vs Splice ====================

console.log('A', myArr) // original array: [0,1,2,3,4,5]

// slice(start, end): start se end tak elements nikalta hai
// ORIGINAL array NAHI badlta, sirf copy deta hai
const myn1 = myArr.slice(1, 3)
console.log(myn1)        // [1, 2] (index 1 aur 2, end index include nahi hota)
console.log('B', myArr)  // [0,1,2,3,4,5] - original same hai

// splice(start, deleteCount): start se deleteCount elements NIKAL deta hai
// ORIGINAL array BADAL jaata hai
const myn2 = myArr.splice(1, 3)
console.log('C', myArr)  // [0, 4, 5] - beech ke 3 elements nikal gaye
console.log(myn2)        // [1, 2, 3] - jo nikale woh yahan hain
