const isStudent = (req, res, next) =>{
    let data = req.session.userData;
    if(!data){
        res.redirect('/');
    }else{
        let {role} =  data;
        if(req.session.userData){
            if(role !== "student"){
                res.redirect('/teachers/courses')
            }
        }
        next();
    }
}

const isTeacher = (req, res, next) =>{
    let data = req.session.userData;
    if(!data){
        res.redirect('/');
    }else{
        let {role} =  data;
        if(req.session.userData){
            if(role !== "teacher"){
                res.redirect('/students/home')
            }
        }
        next();
    }
}

module.exports = {isStudent, isTeacher};

