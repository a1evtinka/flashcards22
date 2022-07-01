'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Game }) {
      // define association here
      User.hasMany(Game, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
