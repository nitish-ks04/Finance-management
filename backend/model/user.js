const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name: String,
    phone: String,
    email: { type: String, unique: true },
    password: String,
    expenses: [
        {
            amount: Number,
            medium: String,
            category: String,
            createdat: { type: Date, default: Date.now }
        }
    ]
});

module.exports = mongoose.model("user", userschema);
