const Sequelize = require("sequelize");
const User = require("../models").User;
const UserType = require("../models").UserType;

const login = (req, res) => {
  return User
    .findOne({ where: { email: req.body.email }, include: 'type'})
    .then(async (User) => {

      if(await User.validPassword(req.body.password)) {
        return res.status(200).send({
          user: User,
          token: User.generateAuthToken()
        })
      }
      
      res.status(400).send({error: 'Bad credentials.'})
    })
    .catch(() => res.status(404).send({error: 'Bad credentials.'}));
}

const register = (req, res) => {
  return User
    .create({
      email: req.body.email,
      password: req.body.password,
      type_id: req.body.type_id,
      name: req.body.name,
      lastname: req.body.lastname
    })
    .then((User) => res.status(200).send(User))
    .catch((error) => res.status(400).send(error));
}

const me = (req, res) => {
  return res.status(200).send(req.user);
}

module.exports = {
  login,
  register,
  me
};
