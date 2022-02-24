'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserCourse.belongsToMany(models.User, {through: 'UserCourse',foreignKey: "StudentId"});
      UserCourse.belongsToMany(models.Course, {through: 'UserCourse',foreignKey: "CourseId"});
    }
  }
  UserCourse.init({
    StudentId: DataTypes.INTEGER,
    CourseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserCourse',
  });
  return UserCourse;
};