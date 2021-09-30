'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {

    static associate(models) {
      this.belongsToMany(models.User, { through: "users_chats", as: "users" });
      this.hasMany(models.Message, { foreignKey: "chat_id" });
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