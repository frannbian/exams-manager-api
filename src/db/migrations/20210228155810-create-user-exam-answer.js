'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_exam_answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_exam_id: {
        allowNull: false,
        references: {
          model: 'user_exams',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      question_id: {
        allowNull: false,
        references: {
          model: 'questions',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_exam_answers');
  }
};