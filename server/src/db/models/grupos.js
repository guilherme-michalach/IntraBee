'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Grupos extends Model {
    
    static associate(models) {
      // this.belongsToMany(models.Usuario, { through: "usuario_grupos" });
      // this.belongsToMany(models.Chats, { through: "chats_grupos" })
    }
    
  };
  Grupos.init({
    nome:{
    type: DataTypes.STRING,
    allowNull:false
  }
  }, {    
    sequelize,
    modelName: 'Grupos',
  });
  return Grupos;
};