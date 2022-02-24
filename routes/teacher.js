const express = require('express')
const Controller = require('../controllers/controller.js')
const router = express.Router()

router.get('/course')

router.get('/course/:id')

router.get('/course/add')
router.post('/course/add')

router.get('/course/:id/edit')
router.post('/course/:id/edit')

router.get('/course/:id/delete')

module.exports = router