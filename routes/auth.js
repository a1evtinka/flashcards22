const authRouter = require('express').Router();

const ReactDOMServer = require('react-dom/server');
const React = require('react');
const bcrypt = require('bcrypt');

const Reg = require('../views/Reg');
const Log = require('../views/Reg');


const { User } = require('../db/models');


authRouter
  .route('/reg')
  .get((req, res) => {
    res.renderComponent(Reg);
  })
  .post(async (req, res) => {
    const { login, name, email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ reg: false });
      return;
    } else {
      const user = await User.create({
        login,
        name,
        email,
        password: await bcrypt.hash(password, 10),
      });
      res.json({ reg: true });
    }
  });

module.exports = authRouter;
