const express = require('express');
const router = express.Router();
const {body , validationResult} = require('express-validator')
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
router.get('/register' , (req,res)=>{
    res.render('register')
})
router.post('/register',
    body('email').trim().isEmail() , 
    body('password').trim().isLength({min : 4}),
    body('username').trim().isLength({min : 2})
 ,async (req,res)=>{
    
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            message: 'invalid data'
        })
    }
    
    const {email , username , password} = req.body;
    const hashPassword = await bcrypt.hash(password,10);
    const newUser = await userModel.create({
        email,
        username,
        password : hashPassword
    })
    res.json(newUser)
})

module.exports = router