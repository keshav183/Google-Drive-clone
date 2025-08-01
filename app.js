const express = require('express');
const userRouter = require('./routes/user.routes')
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require('./config/db');
const cookieParser = require('cookie-parser');
connectToDB();
const IndexRouter = require('./routes/index.routes')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cookieParser());
app.set('view engine' , 'ejs');
app.get('/' , (req,res)=>{
    res.render('index')
})
app.use('/user',userRouter)
app.use('/' , IndexRouter)
app.listen(3000,()=>{
    console.log('server is running on port 3000')
})