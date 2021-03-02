'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("question_options", [
			{
				question_id: 2,
				description: "DISTINCT",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				question_id: 2,
				description: "OVER",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				question_id: 2,
				description:
					"FROM",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("question_options", null, {});
	},
};
