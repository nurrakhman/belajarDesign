const time = require('../helpers/getFormattedTime.js')
let {Category, Course, StudentProfile, User, UserCourse} = require('../models/index.js');
class teacherController{
    static getCourseListbyTeacherId(req,res){
        Course.findAll({where: { UserId:3 }, include: [{model:User, as: "teacherCourse"},{model:Category,attributes:['name']}] ,attributes:['id','name','duration'],order:[['name','ASC']]} )
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
        let {errors} = req.query
        if(errors){
            errors = errors.split(';')
        }
        Category.findAll()
        .then(data=>{
            res.render('addCourse',{data,errors})
            console.log(errors);
        })
        .catch((err) => {
            res.send(err);
        })

    }

    static handleAddCourse(req,res){
        let {id} =  req.session.userData
        const{name,videoUrl,CategoryId,duration,description} = req.body
        Course.create({name,videoUrl,CategoryId,duration,UserId:id,description})
        .then(()=>{
            res.redirect('/teachers/courses')
        })
        .catch((err) => {
            if(err.name === 'SequelizeValidationError'){
                let errorList = err.errors.map((e) => {
                    return e.message
                })
                res.redirect(`/teachers/courses/add?errors=${errorList.join(";")}`)
            }else{
                res.send(err);
            }
        })
    }

    static formEditCourse(req,res){
        let {errors} = req.query
        if(errors){
            errors = errors.split(';')
        }
        const {id} = req.params
        let courseSelected
        Course.findOne({where:{id}})
        .then(data=>{
            // res.render('editCourse',{data})
            courseSelected = data
            return Category.findAll()
        })
        .then(category=>{
            res.render('editCourse',{data:courseSelected,category,errors})
        })
        .catch((err) => {
            res.send(err);
        })
    }

    static handleEditCourse(req,res){
        const {id} = req.params
        const{name,videoUrl,CategoryId,duration,description} = req.body
        Course.update({name,videoUrl,CategoryId,duration,description},{where:{id}})
        .then(()=>{
            res.redirect('/teachers/courses')
        })
        .catch((err) => {
            if(err.name === 'SequelizeValidationError'){
                let errorList = err.errors.map((e) => {
                    return e.message
                })
                res.redirect(`/teachers/courses/${id}/edit?errors=${errorList.join(";")}`)
            }else{
                if(err.name === 'SequelizeValidationError'){
                    let errorList = err.errors.map((e) => {
                        return e.message
                    })
                    res.redirect(`/teachers/courses/add?errors=${errorList.join(";")}`)
                }else{
                    res.send(err);
                }
            }
            
        })
        
    }

    static handleDeleteCourse(req,res){
        const {id} = req.params
        Course.destroy({where:{id}})
        .then(()=>{
            res.redirect('/teachers/courses')
        })
        .catch((err) => {
            res.send(err);
        })
    }

}
module.exports = teacherController
