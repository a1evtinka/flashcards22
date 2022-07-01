'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Flashcards', [
      {
        topic_id: 1,
        question: 'Третья часть самого популярного фильма 90-х',
        answer: 'Сестры',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 1,
        question: 'Сколько рублей стоил доллар в 1993?',
        answer: '1299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 1,
        question: 'Популярная игрушка - виртуальный домашний питомец',
        answer: 'Тамагочи',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 1,
        question: 'Женская одежда из Польши, модная в 1990-е',
        answer: 'Лосины',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 1,
        question: 'Самый известный криминальный авторитет',
        answer: 'Япончик',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question: 'Любимый танцевальный хит Медведева',
        answer: 'American Boy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question: 'Сколько раз',
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
