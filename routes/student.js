const express = require('express')
const studentController = require('../controllers/studentController.js')
const router = express.Router()
router.get('/home',studentController.getHomePage)

router.get('/courses/:id',studentController.getStudentCourse)

router.get('/courses/:id/join',studentController.joinStudentCourses)

router.get('/profile/detail',studentController.getStudentProfile)

router.get('/profile/edit',studentController.formEditStudentProfile)

router.post('/profile/edit',studentController.handleEditStudentProfile)


module.exports = router