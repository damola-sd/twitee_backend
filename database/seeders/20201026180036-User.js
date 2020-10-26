module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users', 
    [
      {
        name: 'Jane Doe',
        email: 'janea@example.com',
        password: 'password',
        date_created: new Date(),
      },
      {
        name: 'John Doe',
        email: 'johnd@example.com',
        password: 'password123',
        date_created: new Date(),
      },
    ],
    {}
  ),
  


  down: async (queryInterface, Sequelize) => 
    queryInterface.bulkDelete('Users', null, {}),
  
};
