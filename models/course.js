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
        notEmpty:true,
        notNull:true
      }
    },
    description: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
        notNull:true
      }
    },
    duration: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true,
        notNull:true
      }
    },
    videoUrl: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
        notNull:true
      }
    }
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};