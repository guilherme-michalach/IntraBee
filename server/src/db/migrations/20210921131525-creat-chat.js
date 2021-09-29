'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('chat', {
      id: {
        allowNull: false,        
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
       name: {
         type: Sequelize.STRING
       },
        created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('chat');
  }
}; 