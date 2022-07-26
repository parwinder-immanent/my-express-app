



// orignal 

const { UserDB } = require("./Users")

const parwinder = {
    name: "parwinder singh",
    email: "234@mail.com",
    age : 12
}
const inder = {
    name: "inder",
    email: "2345@mail.com",
    age : 45
}
 
UserDB.addUser(parwinder)
UserDB.addUser(inder)


console.log(UserDB.findUserByEmail("234@mail.com"))
console.log(UserDB.findUserByName("sharique faizan"))
console.log(UserDB.findUserByName("inder"))
console.log(UserDB.findUserByName("sfaizan"))

console.log(UserDB.AdultLists())
console.log(UserDB.ChildLists())
