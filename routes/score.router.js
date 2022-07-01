const Router = require('express').Router();
const { User, Game } = require('../db/models');
const Score = require('../views/Score');

module.exports = Router.get('/', async (req, res) => {
  const users = await User.findAll({
    include: [{
      model: Game
    }]
  });
  res.end(res.renderComponent(Score, { users }));
});
