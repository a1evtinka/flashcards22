const authRouter = require('express').Router();

const ReactDOMServer = require('react-dom/server');
const React = require('react');
const bcrypt = require('bcrypt');

const Reg = require('../views/Reg');
const Log = require('../views/Reg');


const { User } = require('../db/models');


authRouter
  .route('/')
  .get((req, res) => {
    res.renderComponent(Reg);
  })
  .post(async (req, res) => {
    const { login, name, email, password } = req.body;
    console.log('---->', req.body);
    const mail = await User.findOne({ where: { email }, raw: true });
    console.log('---->', mail);
    if (mail) {
      res.status(400).json({ message: 'error' });
    } else {
      const user = await User.create({
        login,
        name,
        email,
        password: await bcrypt.hash(password, 10),
      });
      res.redirect('/');
    }
  });

module.exports = authRouter;
