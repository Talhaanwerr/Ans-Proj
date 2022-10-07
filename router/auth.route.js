const express = require('express')
// import Auth from "../controllers/AuthController.js";
const router = express.Router()
const { signup, login } = require('../controllers/auth.controller')
// const { login, register } = new Auth();

router.post('/login', login);
router.post('/register', signup);

router.get('/test',(req,res)=>res.send("ok"))


module.exports = router