require("dotenv").config();
const mongoose = require("mongoose");

const db = process.env.DATABASE_API;

mongoose.connect(db)
    .then(() => console.log("Database Connected!"))
    .catch((err) => console.error("Error connecting to the database:", err));