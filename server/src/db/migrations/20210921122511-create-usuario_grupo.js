'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario_grupo', {
      usuario_id: {
        allowNull: false,        
        primaryKey: true,
        type: Sequelize.UUID,
        references: {
          model: "usuarios",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      grupo_id: {
        allowNull: false,        
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "grupos",
          key: "id"
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
    await queryInterface.dropTable('usuario_grupo');
  }
};