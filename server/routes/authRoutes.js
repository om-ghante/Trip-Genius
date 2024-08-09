const express = require('express');
const router = express.Router();
const User = require('../models/users');

// code for login functionality
router.post('/login', async (req, res) => {
    console.log("login");
    const { useremail, usercreatedpass } = req.body;

    try {
        const user = await User.findOne({ useremail, usercreatedpass });

        if (user) {
            res.json({ success: true, user });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// code for register functionality
router.post('/register', async (req, res) => {
    console.log("register");
    const { userfullname, useremail, userphone, usercreatedpass, userfinalpass } = req.body;

    if (usercreatedpass !== userfinalpass) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const existingUser = await User.findOne({ useremail });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const newUser = new User({
            userfullname,
            useremail,
            userphone,
            usercreatedpass
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;