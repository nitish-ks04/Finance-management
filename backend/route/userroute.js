const express = require("express");
const routes = express.Router();
const User = require("../model/user");
const user = require("../model/user");

// Register
routes.post("/register", async (req, res) => {
    const { name, phone, email, password } = req.body;
    try {
        const newUser = new User({ name, phone, email, password });
        await newUser.save();
        res.status(200).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Login
routes.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful", user });
});

// Add Expenses
routes.post("/:email/expenses", async (req, res) => {
    const { amount, medium, category } = req.body;
    try {
        const user = await User.findOne({ email: req.params.email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        user.expenses.push({ amount, medium, category });
        await user.save();
        res.status(200).json({ message: "Expenses added", expenses: user.expenses });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

routes.get("/:email/history", async (req, res) => {
    // const { amount, medium, category } = req.body
    try {
        const user = await User.findOne({ email: req.params.email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, data: user.expenses });
    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
})

routes.delete("/expenses/:id", async (req, res) => {
    try {
        const expenseId = req.params.id;
        const userEmail = req.query.email;

        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        user.expenses = user.expenses.filter(exp => exp._id.toString() !== expenseId);
        console.log(user)
        await user.save();
        console.log(user)

        res.status(200).json({ success: true, message: "Expense deleted" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = routes;