const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required:[true, 'Please provide your name'],
        minlength:[4, "Please Username should be more than 4 characters"]
    },
    password: {
        type: String,
        required:[true, 'Please provide your password'],
        minlength:[14, "Please Password should be more than 14 characters"]
    },
    email: {
        type: String,
        required:[true, 'Please provide your Email']
    }
})

module.exports = mongoose.model("User", userSchema);