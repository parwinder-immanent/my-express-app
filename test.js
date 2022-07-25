const { UserDB } = require("./Users")

const parwinder = {
    name: "parwinder"
}
UserDB.addUser(parwinder)
console.log(UserDB.users)

// UserDB.findUser(parwinder)
// console.log(UserDB.users)