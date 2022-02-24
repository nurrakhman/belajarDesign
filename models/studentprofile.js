'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StudentProfile.belongsTo(models.User, {foreignKey: "UserId"});
    }
  }
  StudentProfile.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    birthDate: DataTypes.DATE
  }, {
    hooks:{
      beforeValidate:(data,opt)=>{
        //data.age = year(now) - year(date of birth)
      }
    },
    sequelize,
    modelName: 'StudentProfile',
  });
  return StudentProfile;
};