'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('question_types', 
    [
      {
        description: 'Verdadero/Falso',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: 'Multiple Choice',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: 'Texto Libre',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('question_types', null, {});
  }
};
