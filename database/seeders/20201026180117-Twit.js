module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    "Twits", [
      {
        twit: "#ENDSARS",
        userId: 1,
      },
      {
        twit: "Lorem Ipsum",
        userId: 2,
      },
      {
        twit: "Social Dilenma was sooo goood",
        userId: 1,
      },

  ],
  {}
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Twits', null, {})
};
