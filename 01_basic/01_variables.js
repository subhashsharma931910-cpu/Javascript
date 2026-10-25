// Variables declare karne ke 3 tarike: const, let, var

const accountId = 144553       // const: value kabhi change nahi hogi
let accountEmail = "subhash@exapmle.com"  // let: value baad mein change ho sakti hai
var accountPassword = "123456"  // var: purana tarika, avoid karo (scope issues hain)
accountCity = "Delhi"           // bina keyword ke: global variable ban jaata hai (avoid karo)

// accountId = 2 // const ki value change nahi hoti, error aayega

console.log(accountId); // single value print karta hai

/*
var use mat karo
kyunki iska block scope aur functional scope mein issue hota hai
*/

// Values update karna
accountEmail = "subhash@example2.com"
accountPassword = "1452365"
accountCity = "mumbai"

// console.table: saari values ek table format mein dikhata hai
console.table([accountId, accountEmail, accountPassword, accountCity])
