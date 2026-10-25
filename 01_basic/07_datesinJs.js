// ==================== Dates in JavaScript ====================

// new Date(): aaj ki current date aur time create karta hai
let myDate = new Date()

console.log(myDate.toString())       // poori date string format mein => "Mon Jan 23 2026 10:30:00 GMT+0530"
console.log(myDate.toDateString())   // sirf date dikhata hai, time nahi => "Mon Jan 23 2026"
console.log(myDate.toLocaleString()); // local format mein date aur time => "1/23/2026, 10:30:00 AM"
console.log(typeof myDate);          // "object" - Date ek object hai

// Apni marzi ki date banana:
// new Date(year, month, day)       => month 0 se start hota hai (0=January, 11=December)
// new Date(year, month, day, hour, minute) => time bhi de sakte ho
// let myCreatedDate = new Date(2026, 0, 23)       // 23 January 2026
// let myCreatedDate = new Date(2026, 0, 23, 5, 3) // 23 Jan 2026, 5:03 AM

// String se date banana (YYYY-MM-DD format)
let myCreatedDate = new Date(`2026-01-23`)
// console.log(myCreatedDate.toLocaleString());


// ==================== Timestamps ====================

// Date.now(): 1 January 1970 se ab tak ke milliseconds deta hai (Unix Timestamp)
let myTimeStamp = Date.now()

console.log(myTimeStamp);                      // current timestamp milliseconds mein
console.log(myCreatedDate.getTime());          // kisi specific date ka timestamp milliseconds mein
console.log(Math.floor(Date.now() / 1000));    // timestamp seconds mein (1000 se divide karo)


// ==================== Date Methods ====================

let newDate = new Date()
console.log(newDate)

// getMonth(): current month deta hai (0 se start hota hai, isliye +1 karo)
console.log(newDate.getMonth() + 1); // 1=Jan, 2=Feb ... 12=Dec

// getDay(): week ka din deta hai (0=Sunday, 1=Monday ... 6=Saturday)
console.log(newDate.getDay());

// Template literal mein date use karna:
// `${newDate.getDay()} and the time`

// toLocaleString() mein options deke specific format mein date nikalna
// weekday: 'long' => poora din ka naam deta hai jaise "Monday", "Tuesday"
newDate.toLocaleString('default', {
    weekday: 'long'
})
