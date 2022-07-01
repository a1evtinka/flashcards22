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
        question: 'Самая узнаваемая модель Nokia',
        answer: '3210',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question: 'Кто выступал на Евровидении от России в 2003-м?',
        answer: 'Tatu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question: 'Чем был отравлен Александр Литвиненко в ноябре 2006 года?',
        answer: 'Полоний-210',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question: 'Во что мы играли на переменах',
        answer: 'Фишки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question: 'Сколько раз Россия становилась победетелем ЧМ по Футболу?',
        answer: '0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question: 'Братья, ставшие сестрами',
        answer: 'Вачовски',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question: 'Сколько раз слово f*ck произносится в среднем в фильмах Тарантино',
        answer: '300',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question: 'На сколько лет Пугачева старше Путина?',
        answer: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic_id: 2,
        question: 'Сколько сексшопов в Питере?',
        answer: '984',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Flashcards', null, {});
  }
};
