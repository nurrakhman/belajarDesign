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
    let courses = JSON.parse(fs.readFileSync("./data/course.json",'utf8'));
    courses.forEach(e => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });

    return queryInterface.bulkInsert('Courses', courses, {});
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Courses', null, {});
  }
};
