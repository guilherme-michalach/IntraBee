'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mensagens extends Model {
   
    static associate(models) {
      // this.belongsToMany(models.Usuario, { through: "usuario_mensagens" });
    }
  };
  Mensagens.init({
    data:{
      type: DataTypes.DATE,
      allowNull:false
    },
    hora:{
     type: DataTypes.DATE,
     allowNull:false
    },
    conteudo: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Mensagens',
  });
  return Mensagens;
};