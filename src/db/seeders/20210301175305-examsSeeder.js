'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('exams', 
    [
      {
        title: 'Evaluación de Full Stack Developer',
        description: 'En esta evaluación buscamos evaluar tu seniority. El resultado de la evaluación lo vas a poder ver una vez terminada la misma.',
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('exams', null, {});
  }
};
