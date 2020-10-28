
module.exports = {
  up: async (queryInterface, Sequelize) =>  queryInterface.bulkInsert(
    'Comments',
    [
      {
        comment: '#SoroSoke',
        userId: 1,
        twitId: 1,
      },
      {
        comment: 'Lorem',
        userId: 2,
        twitId: 2,
      },
      {
        comment: 'Yes, social networks are the worst',
        userId: 2,
        twitId: 3,
       
      },
    ],
    {}
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Comments', null, {})
};
