const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');

require('dotenv').config();
require('./database/config');
const PORT = process.env.PORT || 7173;

app.get('/', (req, res) => {
    res.send('Server Started');
});

app.use(bodyParser.json());
app.use(cors({
    origin: process.env.ORIGIN_API, 
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));
app.use('/auth', AuthRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})