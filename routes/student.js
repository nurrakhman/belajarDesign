const express = require('express')
const studentController = require('../controllers/studentController.js')
const router = express.Router()
const  {isStudent} = require('../middlewares/auth');

router.get('/home', isStudent, studentController.getHomePage)

router.get('/courses/:id', isStudent, studentController.getStudentCourse)

router.get('/courses/:id/join', isStudent, studentController.joinStudentCourses)

router.get('/profile/detail', isStudent, studentController.getStudentProfile)

router.get('/profile/edit', isStudent, studentController.formEditStudentProfile)

router.post('/profile/edit', isStudent, studentController.handleEditStudentProfile)


module.exports = router