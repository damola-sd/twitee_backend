const models = require("../../database/models");
const response = require('../helpers/response');


module.exports = {

    async fetchTwits(req, res) {
        try {
            const twits = await models.Twit.findAll({
                attributes: [
                    'twit',
                    'likes'
                ],
                include: [
                    {
                        model: models.User,
                        attributes: [ 'id', 'name'],
                        as: 'writer'
                    },
                    {
                       model: models.Comment,
                       attributes: ['comment'],
                       as: 'comments',
                       include: [
                           {
                               model: models.User,
                               attributes: ['name', 'id'],
                               as: 'writer'
                           }    
                       ]
                    }
                ]
            });
            if (twits) return response.success(res, 200, twits);
            return response.error(res, 404, 'Could not fetch twits');
        }catch (error) {
            return response.error(res, 500, error.message);
        }
    },

}