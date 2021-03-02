"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.UserType, {
				as: "type",
				foreignKey: "type_id",
			});
		}
	}
	User.init(
		{
			type_id: {
				type: DataTypes.INTEGER,
				validate: {
					isInt: true,
				},
			},
			name: DataTypes.STRING,
			lastname: DataTypes.STRING,
			email: {
				type: DataTypes.STRING,
				validate: {
					isEmail: true,
				},
			},
			password: {
				type: DataTypes.STRING,
			}
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	User.beforeCreate(async (user, options) => {
		user.password = await bcrypt.hash(user.password, 8)
  });

	User.prototype.validPassword = async function (password) {
		return await bcrypt.compare(password, this.password);
	}

	User.prototype.generateAuthToken = function() {
		const token = jwt.sign({ id: this.id }, process.env.JWT_KEY, { expiresIn: '1 week' })
		return token;
	}

	User.prototype.toJSON =  function () {
		var values = Object.assign({}, this.get());
	
		delete values.password;
		return values;
	}
	
	return User;
};
