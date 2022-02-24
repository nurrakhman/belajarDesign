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
// npx sequelize-cli migration:generate --name add-StudentId-in-UserCourse 
// npx sequelize-cli migration:generate --name add-CourseId-in-UserCourse 

// -- Seeds
// npx sequelize-cli seed:generate --name add-user
// npx sequelize-cli seed:generate --name add-studentProfile
// npx sequelize-cli seed:generate --name add-category
// npx sequelize-cli seed:generate --name add-course
// npx sequelize-cli seed:generate --name add-userCourse

