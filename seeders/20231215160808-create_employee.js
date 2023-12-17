'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employees', [{
      id: 1,
      firstname: "Daman",
      lastname: "Huri",
      email: 'damanhuri@gmail.com',
      address: 'Karawang, Indonesia',
      salary: 50000,
      position: "Engineer",
      status: true,
      managerId: 1,
      hireDate: "2022-1-1",
      terminateDate: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      firstname: "Romeo",
      lastname: "Petric",
      email: 'romeo.petric11@gmail.com',
      address: 'Hunedoara, Romania',
      salary: 70000,
      position: "Engineer",
      status: false,
      managerId: 3,
      hireDate: "2021-6-6",
      terminateDate: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('employees', null, {});
  }
};
