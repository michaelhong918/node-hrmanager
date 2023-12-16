'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      id: 1,
      isAdmin: true,
      username: "HrAdmin",
      email: "hradmin@gmail.com",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      isAdmin: false,
      username: "HrAssistance",
      email: "hrasstance@gmail.com",
      password: "password1",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
