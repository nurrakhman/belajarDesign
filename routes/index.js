const express = require('express')
const Controller = require('../controllers/controller.js')
const router = express.Router()
const login = require('./login.js')
const register = require('./register.js')
const student = require('./student.js')
const teacher = require('./teacher.js')


router.get('/',/**Controller.home */)
router.use('/login',login)
router.use('/register',register)
router.use('/student',student)
router.use('/teacher',teacher)


module.exports =router