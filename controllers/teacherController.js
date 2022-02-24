const time = require('../helpers/getFormattedTime.js')
let {Category, Course, StudentProfile, User, UserCourse} = require('../models/index.js');
class teacherController{
    static getCourseListbyTeacherId(req,res){
        Course.findAll({where: { UserId:3 }, include: [{model:User, as: "teacherCourse"},{model:Category,attributes:['name']}] ,attributes:['id','name','duration']} )
            .then((data) => {
                // console.log(data);
                // console.log(time);
                res.render('courseListTeacher',{data,time})
                // res.send(data)
            })
            .catch((err) => {
                // console.log(err);
                res.send(err)
            })
    }

    static showCourseDetail(req,res){
        //menampilkan detail asosiasi student course
        const {id} = req.params
        // console.log(id);
        Course.findOne({where: { id }, include: [{model:User, as: "studentCourse"}]} )
        .then((data) => {
            // res.send(data)
            res.render('courseDetailsTeacher',{data,time})
        })
        .catch((err) => {
            res.send(err);
        })
    }

    static formAddCourse(req,res){
        let {id} =  req.session.userData
        console.log({id})
        Category.findAll()
        .then(data=>{
            res.render('addCourse',{data})
        })
        .catch((err) => {
            res.send(err);
        })

    }

    static handleAddCourse(req,res){
        let {id} =  req.session.userData
        res.send({id})
    }

    static formEditCourse(req,res){
        res.send('this is teacherController')
    }

    static handleEditCourse(req,res){
        res.send('this is teacherController')
    }

}
module.exports = teacherController
