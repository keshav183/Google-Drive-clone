const express = require('express');
const router = express.Router();
const {body , validationResult} = require('express-validator')
router.get('/register' , (req,res)=>{
    res.render('register')
})
router.post('/register',
    body('email').trim().isEmail() , 
    body('password').trim().isLength({min : 4}),
    body('username').trim().isLength({min : 2})
 , (req,res)=>{
    
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            message: 'invalid data'
        })
    }
    res.send(errors)
})

module.exports = router