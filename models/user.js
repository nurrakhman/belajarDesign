'use strict';
const {
  Model
} = require('sequelize');
let bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //sebagai student
      User.hasMany(models.Course, {foreignKey: "UserId", as: "teacherCourse"});
      //sebagai teacher
      User.belongsToMany(models.Course, {through: 'UserCourse', as: "studentCourse", foreignKey: "StudentId"});
      // User
      User.hasOne(models.StudentProfile, {foreignKey: "UserId"});
    }
  }
  User.init({
    //validasi username,email,password,userName tidak boleh spasi,
    //password tidak boleh spasi
    username: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
        notNull:true,
        isSpace(value){
          for(let i=0 ; i < value.length ;i++){
            if(value[i] === ' '){
              throw new Error('Space in username ar not allowed');
            }
          }
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
        notNull:true,
        isSpace(value){
          for(let i=0 ; i < value.length ;i++){
            if(value[i] === ' '){
              throw new Error('Space in username ar not allowed');
            }
          }
        }
    },
    role: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
        notNull:true
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
        notNull:true
      }
    }
  }
}, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user, options) => {
    let pass = user.password;
    let salt = bcrypt.genSaltSync(10);
    pass = bcrypt.hashSync(pass, salt);
    user.password = pass;
  })

  return User;
};