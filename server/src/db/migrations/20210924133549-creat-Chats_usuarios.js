'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('chatss_usuarios', {
      chat_id: {
        allowNull: false,        
        primaryKey: true,        
        type: Sequelize.INTEGER,
        references: {
          model: "chats",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      user_id: {
        allowNull: false,        
        primaryKey: true,    
        type: Sequelize.UUID,
        references: {
          model: "usuarios",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
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
    await queryInterface.dropTable('chatss_usuarios');
  }
};