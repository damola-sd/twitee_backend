const bcrypt = require("bcrypt");
const models = require("../../database/models");
const jwt = require("../helpers/jwt");
const mail = require("../helpers/mail");
const secret = require('../../config/secret');

const response = require('../helpers/response');


module.exports = {
  async register(req, res) {
    try {
      const hash = await bcrypt.hash(req.body.password, 10);
      let name = req.body.email.split("@")[0];
      const createUser = {
        email: req.body.email.toLowerCase(),
        password: hash,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        date_created: new Date(),
      };
      const user = await models.User.create(createUser);
      if (user) {
          const newUser = {
              id: user.id,
              name: user.name,
              email: user.email,
          };
          const token = await jwt.generateToken(newUser);
          const sendMail = await mail(secret.FRONTEND_URL, newUser.name, newUser.email);
          return res.status(201).json({ token, user: newUser });
      }
      return res.status(400).json('Could not create profile');
    } catch (error) {
        return res.status(500).json(error.message)

    }
  },

  async login(req, res, next) {
    const { email, password } = req.body;
      try {
          const user = await models.User.findOne(
              { 
                  where: { email },
                  attributes: ['password', 'name', 'email', 'id']
            }
          );
          if (
            Object.keys(user).length &&
            bcrypt.compareSync(password, user.dataValues.password)
          ) {
            const token = await jwt.generateToken(user.dataValues);
            return response.success(res, 200, {
              message: `${email} successfully logged in.`,
              token
            });
          }
          return response.error(res, 401, 'Invalid credentials');
        } catch (error) {
          return next({ message: 'Error logging in user' });
      }
  },


};
