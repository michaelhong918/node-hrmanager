'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('managers', [{
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      department: 'Information Technology',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      firstName: 'Dave',
      lastName: 'Dorian',
      department: 'Human Resource',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      firstName: 'Oliver',
      lastName: 'Bucher',
      department: 'Operations',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      firstName: 'Moses',
      lastName: 'Noah',
      department: 'Marketing',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      firstName: 'Danny',
      lastName: 'Wang',
      department: 'Finance',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('managers', null, {});
  }
};
