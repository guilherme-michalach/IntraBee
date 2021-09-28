'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    
    static associate(models) {
      this.belongsToMany(models.Evento, { through: "usuario_evento" });
      this.hasOne(models.Apontamento, { through: "usuario_apontamentos" });
      this.belongsToMany(models.Grupo, { through: "usuario_grupos" });
      this.belongsToMany(models.Chat, { through: "chats_usuarios", as: "chats" });
      this.hasMany(models.Mensagem, { foreignKey: "user_id" });
    }
  };
  Usuario.init({
    nome:{
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull:false
    },
    cargo:{
      type: DataTypes.STRING,
      allowNull:false
    },
    isAdmin:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, { 
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};