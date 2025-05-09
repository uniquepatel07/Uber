
const express = require('express');
const router = express.Router();
const {body} = require("express-validator")
const userController = require('../controllers/user.controller');

router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email "),
    body('fullname.firstname').isLength({min:3}).withMessage("first name must be atleast three character long"),
    body('password').isLength({min:6}).withMessage("password must be atlast six letter")
], userController.registerUser)

router.post('/login', [
    body('email').isEmail().withMessage('invalid Email'),
    body('password').isLength({min:6}).withMessage("password must be atleast six letter")
],
    userController.loginUser
)



 
module.exports = router;