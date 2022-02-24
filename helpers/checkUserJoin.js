const checkUserJoin = (studentCourse, id) =>{
    let result = studentCourse.filter(e => e.id === id);
    if(result.length > 0){
        return true
    }else{
        return false
    }
}

module.exports = checkUserJoin;