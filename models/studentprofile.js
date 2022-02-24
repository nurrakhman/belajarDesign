'use strict';
const {
  Model
} = require('sequelize');
const getAge = require('../helpers/getAge');
module.exports = (sequelize, DataTypes) => {
  class StudentProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StudentProfile.belongsTo(models.User, {
        foreignKey: "UserId"
      });
    }
  }
  StudentProfile.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudentProfile',
  });

  StudentProfile.beforeValidate((sp, options) => {
    let age = getAge(sp.birthDate)
    sp.age = age;
  })

  return StudentProfile;
};