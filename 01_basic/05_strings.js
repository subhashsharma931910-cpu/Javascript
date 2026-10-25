const name="subhash"
const repoCount = 50;

console.log(`hello my name is ${name} and my Repo Count is ${repoCount}`);


const gameName="subhash";

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('b'));


const newName=gameName.substring(0,4)
console.log(newName)

const anotherString = gameName.slice(-4,4)
console.log(anotherString);

const newStringName = "    subhash   "
console.log(newStringName)
console.log(newStringName.trim())

const url = "https://subhash.com/subhash%20sharma"

console.log(url.replace('%20','-'));
console.log(newStringName.includes('subhash'))





