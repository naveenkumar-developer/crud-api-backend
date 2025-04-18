const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    hobbies:{
        type:[String],
        required: false
    },
},
{
    timestamps: true
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel