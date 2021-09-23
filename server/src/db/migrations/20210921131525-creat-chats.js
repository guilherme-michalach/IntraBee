'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('chats', {
      id: {
        allowNull: false,        
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      usuario1_id: {
        allowNull: false,        
        type: Sequelize.INTEGER,
        references: {
          model:"usuarios",
          key:"id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      usuario2_id: {       
        type: Sequelize.INTEGER,
        references: {
          model:"usuarios",
          key:"id"
      },
         onUpdate: "CASCADE",
         onDelete: "CASCADE"
      },
      grupo_id: {       
        type: Sequelize.INTEGER,
        references: {
          model:"grupos",
          key:"id"
      },
         onUpdate: "CASCADE",
         onDelete: "CASCADE"
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
    await queryInterface.dropTable('chats');
  }
};