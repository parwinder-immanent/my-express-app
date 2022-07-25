
const sharique = {
    name: "sharique"
}
const users = [sharique];
module.exports.UserDB = {
    get users() {
        return users
    },
    addUser(user) {
        users.push(user)
    },
    findUser() {

    }
}

