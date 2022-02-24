const express = require('express')
const Controller = require('../controllers/controller.js')
const router = express.Router()


router.get('/home')

router.get('/courses/:id')

router.get('/courses/:id/join')

router.get('/profile/detail')

router.get('/profile/edit')

router.post('/profile/edit')


module.exports = router