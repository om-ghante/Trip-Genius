require("dotenv").config();
require("./database/config");
const express = require("express");
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(cors({
    origin: process.env.ORIGIN_API, 
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json("server start");
});

app.use("/api/auth", authRoutes);

app.options("*", cors());

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});
