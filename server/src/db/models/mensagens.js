'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mensagem extends Model {
   
    static associate(models) {
      this.belongsToMany(models.Usuario, { through: "usuario_mensagens" });
    }
  };
  Mensagem.init({
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
    modelName: 'Mensagem',
  
  });
  return Mensagem;
};