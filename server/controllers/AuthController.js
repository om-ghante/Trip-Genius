const { oauth2client } = require('../utils/googleConfig');
const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/user");


const signup = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new UserModel({ name, email, phone, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            })
    } catch (err) {
        console.log(err)
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                email,
                name: user.name
            })
    } catch (err) {
        console.log(err)
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

const googleLogin = async (req, res) => { 
    try {
        const { code } = req.query;

       
        const { tokens } = await oauth2client.getToken(code);  
        oauth2client.setCredentials(tokens);

        
        const userRes = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`
        );
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
            process.env.JWT_SECRET, 
            {
                expiresIn: process.env.JWT_TIMEOUT
            }
        );

        return res.status(200).json({
            message: 'Success',
            token,
            user
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message  
        });
    }
}

module.exports = {
    signup,
    login,
    googleLogin
}