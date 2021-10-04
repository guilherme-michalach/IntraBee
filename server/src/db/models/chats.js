'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Chats extends Model {
  
    static associate(models) {
      this.hasMany(models.Mensagem, { foreignKey: "chat_id" });
      this.belongsToMany(models.Usuario, { through: "chats_usuarios", as: "users" });
      this.belongsToMany(models.Grupo, { through: "chats_grupos" });

    }
  };
  Chats.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chats',
  });
  return Chats;
};