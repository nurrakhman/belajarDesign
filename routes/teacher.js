const express = require('express')
const teacherController = require('../controllers/teacherController.js')
const router = express.Router()

router.get('/courses',teacherController.getCourseListbyTeacherId)//list course khusus teacher

router.get('/courses/add',teacherController.formAddCourse)
router.post('/courses/add',teacherController.handleAddCourse)
router.get('/courses/:id',teacherController.showCourseDetail) 

router.get('/courses/:id/edit',teacherController.handleAddCourse)
router.post('/courses/:id/edit',teacherController.formEditCourse)

router.get('/courses/:id/delete',teacherController.handleEditCourse)

module.exports = router