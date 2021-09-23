'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    
    static associate(models) {
      this.belongsToMany(models.Evento, { through: "usuario_evento" });
      this.belongsToMany(models.Apontamentos, { through: "usuario_apontamentos" });
      this.belongsToMany(models.Grupos, { through: "usuario_grupos" });
      this.belongsToMany(models.Mensagens, { through: "usuario_mensagens" });
      this.hasMany(models.Chats, { foreignKey: "id_usuario1" });
      this.hasMany(models.Chats, { foreignKey: "id_usuario2" });
    }
  };
  Usuario.init({
    nome:{
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
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
    sequelize,
    modelName: 'usuario',
  });
  return User;
};