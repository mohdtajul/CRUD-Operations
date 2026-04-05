const mongoose= require('mongoose')
// user schema
const UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        age: Number
    })
// user model
const UserModel= mongoose.model("users",UserSchema);

module.exports = UserModel;