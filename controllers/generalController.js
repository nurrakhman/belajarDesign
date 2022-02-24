const {User, StudentProfile} = require('../models');
const user = require('../models/user');
const bcrypt = require('bcryptjs');
const getAge = require('../helpers/getAge');

class generalController{
    static getLandingPage(req,res){
        res.render('landingPage')
    }

    static formLogin(req,res){
        let { error } = req.query;
        res.render('loginPage', {listError: error ? error.split(";") : null})
    }

    static handleLogin(req,res){
        const {username, password} = req.body;
        let errorList =[];
        User.findOne({where: {username}})
        .then((user) => {
            if(user){
                let checkPass = bcrypt.compareSync(password, user.password)
                if(checkPass){
                    req.session.userData = {
                        username: user.username,
                        id: user.id,
                        role: user.role
                    }
                    if(user.role === "student"){
                        res.redirect('/students/home');
                    }else{
                        res.redirect('/teachers/courses');
                    }
                }else{
                    errorList.push("password salah")
                    res.redirect(`/login?error=${errorList.join(';')}`)
                }
            }else{
                errorList.push("Username tidak terdaftar")
                res.redirect(`/login?error=${errorList.join(';')}`)
            }
        })
        .catch((err)=>{
            res.send(err)
        })
    }    

    static formRegister(req,res){
        let { error } = req.query;
        res.render('registerPage', {listError: error ? error.split(";") : null})
        
    }

    static handleRegister(req,res){
        let {username, password, email, name, birthDate ,gender } = req.body;
        let errorList =[];
        if(birthDate){
            let age = getAge(birthDate)
            if(age < 5){
                errorList.push("User is to young to register to site, min age is 5 year olds")
                res.redirect(`/register?error=${errorList.join(';')}`)
                return
            }
        }
        User.create({username, password, email, role: 'student'})
        .then((user) => {
            return StudentProfile.create({name, birthDate, gender, UserId: user.id})
        })
        .then(()=>{
            res.redirect("/students/home")
        })
        .catch((err) => {
            if (err.name === "SequelizeValidationError") {
                let errorList = err.errors.map((e) => {
                    return e.message
                })
                res.redirect(`/register?error=${errorList.join(";")}`)
            } else {
                res.send(err)
            }
        })
    }   
    
    static handleLogout(req,res){
        req.session.destroy((err) => {
            if(err){
                res.send(err)
            }else{
                res.redirect('/');
            }
        })
    }   
}


module.exports = generalController