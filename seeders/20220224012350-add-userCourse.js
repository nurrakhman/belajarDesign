'use strict';
const fs = require('fs');

module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let userCourses = JSON.parse(fs.readFileSync("./data/userCourse.json",'utf8'));
    userCourses.forEach(e => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });

    return queryInterface.bulkInsert('UserCourses', userCourses, {});
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('UserCourses', null, {});
  }
};
