const getStaticGender = (student) =>{
    let static = [0,0]
    student.forEach(e => {
        if(e.StudentProfile.gender == "male"){
            static[0] += 1;
        }else{
            static[1] += 1;
        }
    });
    return static
}

module.exports = getStaticGender;