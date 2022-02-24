// -- Models
// npx sequelize-cli model:generate --name User --attributes username:string,password:string,role:string,email:string
// npx sequelize-cli model:generate --name StudentProfile --attributes name:string,age:integer,gender:string
// npx sequelize-cli model:generate --name Category --attributes name:string 
// npx sequelize-cli model:generate --name Course --attributes name:string,description:string,duration:integer,videoUrl:string
// npx sequelize-cli model:generate --name UserCourse  --attributes StudentId:integer,CourseId:integer

// -- Migration
// npx sequelize-cli migration:generate --name add-UserId-in-StudentsProfile
// npx sequelize-cli migration:generate --name add-UserId-in-Course 
// npx sequelize-cli migration:generate --name add-CategoryId-in-Course 
// npx sequelize-cli migration:generate --name update-CourseId-in-UserCourse 
// npx sequelize-cli migration:generate --name update-StudentId-in-UserCourse 

// -- Seeds
// npx sequelize-cli seed:generate --name add-user
// npx sequelize-cli seed:generate --name add-studentProfile
// npx sequelize-cli seed:generate --name add-category
// npx sequelize-cli seed:generate --name add-course
// npx sequelize-cli seed:generate --name add-userCourse

// -- Test Sequelize RelationShip
let {Category, Course, StudentProfile, User, UserCourse} = require('./models');
// - Get StudentProfile

// User.findAll({where: { role:"student" }, include: StudentProfile} )
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// - Get StudentCourse
// User.findOne({where: { id:3 }, include: [{model:Course, as: "Course"}]} )
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// - Get Course owner
// Course.findOne({where: { id:1 }, include: User} )
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// - Get Category Course
// Category.findOne({where: { id:1 }, include: Course} )
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// - Course cari teacher
// Course.findOne({where: { id:1 }, include: [{model:User, as: "teacherCourse"}]} )
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })