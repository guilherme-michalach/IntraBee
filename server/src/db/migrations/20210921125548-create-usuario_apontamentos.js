'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario_apontamentos', {
      usuario_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model:"usuarios",
          key:"id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      apontamentos_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model:"apontamentos",
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
    await queryInterface.dropTable('grupos');
  }
};