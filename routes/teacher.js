const express = require('express')
const teacherController = require('../controllers/teacherController.js')
const router = express.Router()
const  {isTeacher} = require('../middlewares/auth');

router.get('/courses', isTeacher, teacherController.getCourseListbyTeacherId)//list course khusus teacher

router.get('/courses/add' ,isTeacher, teacherController.formAddCourse)
router.post('/courses/add' ,isTeacher, teacherController.handleAddCourse)
router.get('/courses/:id' ,isTeacher, teacherController.showCourseDetail) 

router.get('/courses/:id/edit' ,isTeacher, teacherController.formEditCourse)
router.post('/courses/:id/edit' ,isTeacher, teacherController.handleEditCourse)

router.get('/courses/:id/delete' ,isTeacher, teacherController.handleDeleteCourse)

module.exports = router