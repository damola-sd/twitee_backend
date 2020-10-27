const models = require('../../database/models');

module.exports = {
  async findUserById(id) {
    try {
      const user = await models.Users.findOne({
        where: { id }
      });
      return user;
    } catch (error) {
      return error.message;
    }
  }
};
