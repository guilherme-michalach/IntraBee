'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Apontamento extends Model {
   
    static associate(models) {
      this.belongsTo(models.Usuario, { through: "usuario_apontamentos" });
    }
  };
  Apontamento.init({
    data: {
      type: DataTypes.DATE,
      allowNull:false
    },
    hora:{
      type: DataTypes.DATE,
      allowNull:false
    },
    }, { 
    sequelize,
    modelName: 'Apontamento',
  });
  return Apontamento;
};