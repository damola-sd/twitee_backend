const Validator = require('validatorjs');
const models = require('../../database/models');
const userQuery = require('../helpers/users');
const Sequelize = require('sequelize');
const response = require('../helpers/response');




module.exports = {
    async validateUserExists(req, res, next) {
        const { id } = req.decode;
        try {
          const user = await userQuery.findUserById(id);
          if (!user) return response.error(res, 404, 'User not found');
          req.user = user;
          return next();
        } catch (errors) {
          return next({ message: 'Server error try again' });
        }
      },

      async validateUserSignup(req, res, next) {
        const validator = new Validator(req.body, {
          password: 'required|min:8',
          email: 'required|email'
        });
    
        if (validator.fails()) {
          return response.error(res, 400, validator.errors.all());
        }
        try {
          const user = await models.User.findOne({
            where: {
             email: req.body.email.toLowerCase() 
            },
            attributes: ['id']
          });
          if (!user) {
            return next();
          }
          return response.error(
            res,
            400,
            'User already registered with email provided'
          );
        } catch (error) {
          return next({ message: 'Error validating user signup' });
        }
      }
};