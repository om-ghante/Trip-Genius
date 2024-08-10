const UserModel = require('../models/user');

const getUserByEmail = async (email) => {
    try {
        if (!email) {
            throw new Error('Email is required');
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            throw new Error('User not found');
        }

        // Prepare userCredentials
        const { name, email: userEmail, phone, password: hashedPassword, image: picture } = user;
        const userCredentials = {
            name,
            email: userEmail,
            phone,
            password: hashedPassword,
            image: picture
        };

        return {
            success: true,
            message: 'User data retrieved successfully',
            userCredentials
        };
    } catch (err) {
        console.error(err);
        return {
            success: false,
            message: err.message
        };
    }
};

module.exports = { getUserByEmail };
