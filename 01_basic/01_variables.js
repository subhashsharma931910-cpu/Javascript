const accountId = 144553

let accountEmail = "subhash@exapmle.com"
var accountPassword = "123456"
accountCity = "Delhi"

// accountId = 2 //not allowed
console.log(accountId);

/*
prefer not to use var
because of issue in block scop and functionsal scope
*/

accountEmail = "subhash@example2.com"
accountPassword = "1452365"
accountCity = "mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity])

