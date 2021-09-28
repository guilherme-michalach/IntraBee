'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    
    static associate(models) {
      this.belongsToMany(models.Usuario, { through: "usuario_evento" });
    }
  };
  Evento.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Evento',
  });
  return Evento;
};