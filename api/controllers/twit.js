const models = require("../../database/models");
const response = require('../helpers/response');


module.exports = {

    async fetchTwits(req, res) {
        try {
            const twits = await models.Twit.findAll({
                attributes: [
                    'id',
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

    async postTwit(req, res) {
        const { id } = req.decode;
        try {
            const newTwit = {
                twit: req.body.twit,
                userId: id,
                likes: 0
            };
            const createTwit = await models.Twit.create(newTwit);
            if (createTwit) { return response.success(res, 201, createTwit) };
            return response.error(res, 401, 'Could not create new tweet')
        }catch (error) {
            return response.error(res, 500, error.message);
        }
        
    },

    async deleteTwit(req, res) {
        const { id } = req.decode;
        const { twitId } = req.params;
        try {
            const deleteTwit = await models.Twit.destroy({
                where: { id: twitId, userId: id }
            });
            if (deleteTwit) return response.success(res, 201, "Successfully deleted twit");
            return response.error(res, 401, 'Could not delete tweet');
        }catch (error) {
            return response.error(res, 500, error.message);
        }
    },

    async postComment(req, res) {
        const { id } = req.decode;
        const { twitId } = req.params;
        try {
            const newComment = { 
                comment: req.body.comment,
                twitId,
                userId: id
            };
            const addComment = await models.Comment.create(newComment);
            if (addComment) { return response.success(res, 201, addComment) };
            return response.error(res, 401, 'Could add comment')
        }catch (error) {
            return response.error(res, 500, error.message);
        }

    }

}