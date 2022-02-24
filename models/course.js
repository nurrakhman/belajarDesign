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
      Course.belongsTo(models.Users, {foreignKey: "UserId"});
      Course.belongsTo(models.Categories, {foreignKey: "CategoryId"});
      Course.hasMany(models.Users, {through: 'UserCourse',foreignKey: "CourseId"});
    }
  }
  Course.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    videoUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};