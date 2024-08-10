const { signup, login, googleLogin, userInfo } = require('../controllers/AuthController');
const { signupValidation, loginValidation } = require('../midlewares/authvalidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.get('/google', googleLogin);
router.get('/info', userInfo)

module.exports = router;