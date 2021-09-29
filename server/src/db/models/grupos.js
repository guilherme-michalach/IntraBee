'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Grupo extends Model {

    static associate(models) {
      this.belongsToMany(models.Usuario, { through: "usuario_grupos" });
      this.belongsToMany(models.Chats, { through: "chats_grupos" });
    }
    
  };
  Grupo.init({
    nome:{
    type: DataTypes.STRING,
    allowNull:false
    }
    }, {
    sequelize,
    modelName: 'Grupo',
  });
  return Grupo;
};