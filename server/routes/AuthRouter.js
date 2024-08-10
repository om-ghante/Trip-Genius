const { signup, login, googleLogin } = require('../controllers/AuthController');
const { signupValidation, loginValidation } = require('../midlewares/authvalidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

router.get('/google', googleLogin)

module.exports = router;