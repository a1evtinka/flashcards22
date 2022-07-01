'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Topics', [
      {
        title: 'Топик № 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Топик № 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
  }
};
