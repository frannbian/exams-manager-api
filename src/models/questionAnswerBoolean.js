'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionAnswerBoolean extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  QuestionAnswerBoolean.init({
    question_id: DataTypes.INTEGER,
    value: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'QuestionAnswerBoolean',
    tableName: 'question_answer_boolean'
  });
  return QuestionAnswerBoolean;
};