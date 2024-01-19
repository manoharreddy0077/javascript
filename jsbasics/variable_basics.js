const accountId=12345
let accountEmail="manohar@gmail.com"
var accountPassword="173902"
accountCity="bellari"
let accountState;

// accountId=123456  for const --> reassignning is not allowed
accountEmail="manu@gmail.com"
accountPassword="1739"
accountCity="bengaluru"



console.log(accountId);

/*
    prefer not to use var cuz of issue in block scope and functional scope 
*/





console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
