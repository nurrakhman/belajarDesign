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
    let studentProfiles = JSON.parse(fs.readFileSync("./data/studentProfile.json",'utf8'));
    studentProfiles.forEach(e => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });

    return queryInterface.bulkInsert('StudentProfiles', studentProfiles, {});
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('StudentProfiles', null, {});
  }
};
