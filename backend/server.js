const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/finance", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("mongodb connnected"))
    .catch((err) => console.error("mongodb error", err));

const userroutes = require("./route/userroute");
app.use("/api/users", userroutes);

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})