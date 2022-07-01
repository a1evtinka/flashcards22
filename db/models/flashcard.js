'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flashcard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic }) {
      // define association here
      Flashcard.belongsTo(Topic, { foreignKey: 'topic_id' });
    }
  }
  Flashcard.init(
    {
      topic_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Topics',
          key: 'id',
        },
      },
      topic_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Topics',
          key: 'id',
        },
      },
      question: {
        type: DataTypes.TEXT,
      },
      answer: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Flashcard',
    }
  );
  return Flashcard;
};
