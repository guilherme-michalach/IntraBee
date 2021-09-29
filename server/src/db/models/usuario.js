'use strict';

const { Model } = require('sequelize');

const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    
    static associate(models) {
      this.belongsToMany(models.Evento, { through: "usuario_evento" });
      this.hasOne(models.Apontamento, { through: "usuario_apontamentos" });
      this.belongsToMany(models.Grupo, { through: "usuario_grupos" });
      this.belongsToMany(models.Chats, { through: "chats_usuarios", as: "chats" });
      this.hasMany(models.Mensagem, { foreignKey: "user_id" });
    }

    senhaValida(senha) {
      return bcrypt.compareSync(senha, this.senha);
    }    

    toJSON() {
      return {
        ...this.get(),
        senha: undefined
      }
    }

  };
  Usuario.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nome:{
      type: DataTypes.STRING,
      allowNull:false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      set(senha) {
        this.setDataValue("senha", bcrypt.hashSync(senha, 10));
    } },
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
      allowNull: true
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