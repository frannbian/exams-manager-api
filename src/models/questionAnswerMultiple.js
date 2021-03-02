'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionAnswerMultiple extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  QuestionAnswerMultiple.init({
    question_id: DataTypes.INTEGER,
    question_option_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QuestionAnswerMultiple',
    tableName: 'question_answer_multiple'
  });
  return QuestionAnswerMultiple;
};