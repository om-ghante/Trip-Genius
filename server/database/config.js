const mongoose = require('mongoose');
const url = process.env.DATABASE_API;

mongoose.connect(url)
    .then(()=>{
        console.log('Database Connected!');
    }).catch((err)=>{
        console.log('MongoDB connection Error:', err);
    })