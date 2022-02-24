const getAge = (date) => {
    let dob = new Date(date);
    let age = Date.now() - dob.getTime();
    age = new Date(age)
    var year = age.getUTCFullYear();
    age = Math.abs(year - 1970)
    return age
} 

module.exports = getAge;