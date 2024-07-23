'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'Boeing 777',
        capacity: 300,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: 'Airbus A330',
        capacity: 350,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: 'Bombardier CRJ',
        capacity: 220,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: 'Airbus A320',
        capacity: 450,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: 'Cessna 172',
        capacity: 160,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
