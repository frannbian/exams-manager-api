'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_types', 
    [
      {
        description: 'Profesor',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: 'Recruiter',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: 'Invitado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_types', null, {});
  }
};
