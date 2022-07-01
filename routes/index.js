const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Main = require('../views/Main');
const router = express.Router();
const mainRouter = require('express').Router();

router.get('/', (req, res) => { // vfршрут на главную страницу
  const main = React.createElement(Main, { title: 'Welcome' }); // костанта содержит элемент для главной страницы с приветственным текстом
  const html = ReactDOMServer.renderToStaticMarkup(main); // констанка содержит отрисовку главной страницы с вложенной переменной
  res.write('<!DOCTYPE html>'); // клиенту отправляется команда для отрисовки хтмл
  res.send(html) // отправляется хтмл
})




module.exports = mainRouter;
