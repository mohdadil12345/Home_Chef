
const mongoose = require("mongoose")


const userSchema = mongoose.Schema({

username : String,
email : String,
password : String,
city : String

}, {
    versionKey : false
})


const UserModel = mongoose.model("user", userSchema)

module.exports = {
    UserModel
}