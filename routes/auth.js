const authRouter = require('express').Router();

const ReactDOMServer = require('react-dom/server');
const React = require('react');
const bcrypt = require('bcrypt');

const Reg = require('../views/Reg');
const Log = require('../views/Reg');

const { User } = require('../db/models'); // <<<--------------


authRouter
  .route('/')
  .get((req, res) => {
    res.renderComponent(Reg);
  })
  .post(async (req, res) => {
    const { login, name, email, password } = req.body;
    const user = await User.findAll({ where: { email } });
    
  });

  module.exports = authRouter;
