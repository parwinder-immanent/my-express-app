




// orignal

const users = [];
module.exports.UserDB = {
    get users() {
        return users
    },

    addUser(user) {
        users.push(user)
    },

    findUserByEmail(email) {
        return users.find(user => user.email === email)
    },
    
    findUserByName(name) {
        return users.find(user => user.name === name)
    },
   

AdultLists(age) {
    return users.find(user => user.age >= 18)
},
ChildLists(age) {
    return users.find(user => user.age <= 19)
},
}



