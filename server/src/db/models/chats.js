'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
  
    static associate(models) {
      this.hasMany(models.Mensagem, { foreignKey: "chat_id" });
      this.belongsToMany(models.Usuario, { through: "chats_usuarios", as: "usuarios" });
      this.belongsToMany(models.Grupo, { through: "chats_grupos" });

    }
  };
  Chat.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};