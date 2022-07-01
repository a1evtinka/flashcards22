const Router = require('express').Router();
const Main = require('../views/Main');

const { Topic, Flashcard } = require('../db/models');

Router.get('/', async (req, res) => { // vfршрут на главную страницу
  const topics = await Topic.findAll();
  res.end(res.renderComponent(Main, { topics, title: 'Welcome' }));
});

Router.get('/topic/:id', async (req, res) => { // vfршрут на главную страницу
  const FlashcardList = await Flashcard.findAll({ where: { topic_id: req.params.id } });
  res.end(JSON.stringify({ data:FlashcardList }));
});

module.exports = Router;
