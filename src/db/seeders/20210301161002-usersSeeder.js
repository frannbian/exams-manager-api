'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash('test_!', 8);
    return queryInterface.bulkInsert('users', [{
      type_id: 1,
      name: 'John',
      lastname: 'Doe',
      email: 'test@exams.com',
      password: password,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
