'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Apontamentos extends Model {   
    static associate(models) {
      // this.belongsTo(models.Usuario, { through: "usuario_apontamentos" });
    }
  };
  Apontamentos.init({
    data: {
      type: DataTypes.DATE,
      allowNull:false
    },
    hora:{
      type: DataTypes.DATE,
      allowNull:false
    }    
  }, {
    sequelize,
    modelName: 'Apontamentos',
  });
  return Apontamentos;
};