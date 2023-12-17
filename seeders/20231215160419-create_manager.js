'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Managers', [{
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      department: 'Information Technology',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      firstname: 'Dave',
      lastname: 'Dorian',
      department: 'Human Resource',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      firstname: 'Oliver',
      lastname: 'Bucher',
      department: 'Operations',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      firstname: 'Moses',
      lastname: 'Noah',
      department: 'Marketing',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      firstname: 'Danny',
      lastname: 'Wang',
      department: 'Finance',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Managers', null, {});
  }
};
