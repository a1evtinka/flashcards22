const Router = require('express').Router();
const Main = require('../views/Main');

module.exports = Router.get('/', (req, res) => { // vfршрут на главную страницу
  res.end(res.renderComponent(Main, { title: 'Welcome' }));
});
