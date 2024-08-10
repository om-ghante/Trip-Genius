const express = require('express');
const app = express();
const { oauth2client } = require('../utils/gConfig');
const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/user");
const { getUserByEmail } = require('./getUserByEmail');

const signup = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: 'User already exists, you can login', success: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userModel = new UserModel({ name, email, phone, password: hashedPassword });
        await userModel.save();
        const userCredentialsResult = await getUserByEmail(email);
        res.status(201).json({
            message: "Signup successful",
            success: true,
            email,
            userCredentialsResult
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: 'Authentication failed: Email or password is incorrect', success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: 'Authentication failed: Email or password is incorrect', success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET || 'default_secret', 
            { expiresIn: '24h' }
        );
        const userCredentialsResult = await getUserByEmail(email);
        res.status(200).json({
            message: "Login successful",
            success: true,
            email,
            userCredentialsResult
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

const googleLogin = async (req, res) => {
    try {
        const { code } = req.query;
        const { tokens } = await oauth2client.getToken(code);
        oauth2client.setCredentials(tokens);

        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`);
        const { email, name, picture } = userRes.data;

        let user = await UserModel.findOne({ email });
        if (!user) {
            user = await UserModel.create({
                name, email, image: picture
            });
        }

        const { _id } = user;
        const token = jwt.sign(
            { _id, email },
            process.env.JWT_SECRET || 'default_secret',  
            { expiresIn: process.env.JWT_TIMEOUT || '24h' }  
        );
        const userCredentialsResult = await getUserByEmail(email);
        res.status(200).json({
            message: "Welcome To Trip Genius!",
            success: true,
            email,
            userCredentialsResult
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            error: err.message
        });
    }
}

const userInfo = async (req, res) => {
    const { email } = req.query; 
    if (!email) {
        return res.status(400).json({ error: 'Email parameter is required' });
    }
  
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
      
        res.json(user);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
};

module.exports = {
    signup,
    login,
    googleLogin,
    userInfo
}
