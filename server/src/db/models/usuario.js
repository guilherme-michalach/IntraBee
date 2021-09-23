'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    
    static associate(models) {
      this.belongsToMany(models.Evento, { through: "usuario_evento" });
      this.hasMany(models.Apontamento, { through: "usuario_apontamentos" });
      this.belongsToMany(models.Grupo, { through: "usuario_grupos" });
      this.belongsToMany(models.Mensagem, { through: "usuario_mensagens" });
      this.hasMany(models.Chat, { foreignKey: "id_usuario1" });
      this.hasMany(models.Chat, { foreignKey: "id_usuario2" });
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
    }
  }, { 
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};