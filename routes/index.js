const express = require('express')
const generalController = require('../controllers/generalController.js')
const router = express.Router()
const student = require('./student.js')
const teacher = require('./teacher.js')


router.get('/',generalController.getLandingPage)

router.get('/login',generalController.formLogin)
router.post('/login',generalController.handleLogin)

router.get('/register',generalController.formRegister)
router.post('/register',generalController.handleRegister)

router.get('/logout',generalController.handleLogout)

router.use('/students',student)
router.use('/teachers',teacher)


module.exports =router