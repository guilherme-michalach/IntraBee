'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chats extends Model {
  
    static associate(models) {
      // this.belongsToMany(models.Usuario, { foreignKey: "id_usuario1" });
      // this.belongsToMany(models.Usuario, { foreignKey: "id_usuario2" });
      // this.belongsToMany(models.Usuario, { foreignKey: "id_grupos" });
      // this.hasMany(models.Grupos, { through: "chats_grupos" })
    }
  };
  Chats.init({}, {
    sequelize,
    modelName: 'Chats',
  });
  return Chats;
};