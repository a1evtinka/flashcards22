'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Flashcards', [
      {
        topic_id: 1,
        question: 'Вопрос № 1 в топике № 1',
        answer: 'Правильный ответ № 1 на вопрос № 1 в топике № 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 1,
        question: 'Вопрос № 2 в топике № 1',
        answer: 'Правильный ответ № 2 на вопрос № 1 в топике № 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question: 'Вопрос № 1 в топике № 2',
        answer: 'Правильный ответ № 1 на вопрос № 1 в топике № 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question: 'Вопрос № 2 в топике № 2',
        answer: 'Правильный ответ № 2 на вопрос № 2 в топике № 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Flashcards', null, {});
  }
};
