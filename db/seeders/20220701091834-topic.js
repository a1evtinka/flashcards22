'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Topics', [
      {
        title: 'девяностые',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'нулевые',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'бонус',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
  }
};
