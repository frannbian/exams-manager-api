"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("questions", [
			{
				exam_id: 1,
				type_id: 1,
				description: "Verdadero o falso: HTML es un lenguaje de programación.",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				exam_id: 1,
				type_id: 2,
				description: "¿Cuál de las siguientes palabras, NO es una palabra reservada de ANSI-SQL",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				exam_id: 1,
				type_id: 3,
				description:
					"¿Cuál es el comparador que se usa en Python cuándo queremos saber si la referencia de dos variables es el mismo objeto?",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("questions", null, {});
	},
};
