'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mensagem extends Model {
   
    static associate(models) {
      this.belongsTo(models.Chat, { foreignKey: "chat_id" });
      this.belongsTo(models.Usuario, { foreignKey: "usuario_id" });
    }
  };
  Mensagem.init({
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Mensagem',
  });
  return Mensagem;
};