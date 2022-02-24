'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //sebagai teacher
      Course.belongsTo(models.User, {foreignKey: "UserId", as: "teacherCourse"});
      Course.belongsTo(models.Category, {foreignKey: "CategoryId"});
      //sebagai student
      Course.belongsToMany(models.User, {through: 'UserCourse', foreignKey: "CourseId", as: "studentCourse"});
    }
  }
  Course.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:'Name cannot be empty'
        },
        notNull:true
      }
    },
    description: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:'Description cannot be empty'
        },
        notNull:true
      }
    },
    duration: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:true,
        min :{
          args:[1],
          msg:'Duration of video at least 1 second'
        },
        isInt:{
          args:true,
          msg:'Duration cannot be empt'
        }
      }
    },
    videoUrl: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:'Video Url cannot be empty'
        },
        notNull:true
      }
    }
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};