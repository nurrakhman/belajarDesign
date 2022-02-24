const {Course, User, UserCourse, StudentProfile} = require('../models');
const checkUserJoin = require('../helpers/checkUserJoin');
const getFormattedTime = require('../helpers/getFormattedTime');
const { Op } = require("sequelize");
class studentController{
    static getHomePage(req,res){
        let userData =  req.session.userData
        let option = {}
        if(req.query.search){
            option = {name:{[Op.iLike]:`%${req.query.search}%`}}
        }
        Course.findAll({include: [{model:User, as: "studentCourse"}],where:option})
        .then((courseData) => {
            //res.send({courseData})
            res.render("homePage",{courseData, checkUserJoin, userData, getFormattedTime})
        })
        .catch((err) => {
            res.send(err)
        })
        
    }

    static getStudentCourse(req,res){
        let {id} = req.params;
        Course.findOne({where: {id}, include: [{model:User, as: "teacherCourse"}]})
        .then((courseData) => {
            //res.send({courseData});
            res.render("studentCourseDetail",{courseData, getFormattedTime}); 
        })
        .catch((err) => {
            res.send(err);
        })

    }

    static joinStudentCourses(req,res){
        let {id} = req.params;
        let studentId = req.session.userData.id
        UserCourse.create({StudentId: studentId, CourseId:+id})
        .then(() => {
            res.redirect('/students/home')
        })
        .catch((err) => {
            res.send(err);
        })
    }

    static getStudentProfile(req,res){
        let {id} = req.session.userData;
        User.findOne({where: {id}, include: [{model:Course, as: "studentCourse"}, {model:StudentProfile}]})
        .then((studentData) => {
            res.render("studentDetail",{studentData});
        })
        .catch((err) => {
            res.send(err);
        })
    }

    static formEditStudentProfile(req,res){
        res.send('this is studentController')
    }

    static handleEditStudentProfile(req,res){
        res.send('this is studentController')
    }
}


module.exports = studentController