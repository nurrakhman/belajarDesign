class studentController{
    static getHomePage(req,res){
        let {username, id, role} =  req.session.userData
        res.send({username, id, role})
    }

    static getStudentCourse(req,res){
        res.send('this is studentController')
    }

    static joinStudentCourses(req,res){
        res.send('this is studentController')
    }

    static getStudentProfile(req,res){
        res.send('this is studentController')
    }

    static formEditStudentProfile(req,res){
        res.send('this is studentController')
    }

    static handleEditStudentProfile(req,res){
        res.send('this is studentController')
    }
}


module.exports = studentController