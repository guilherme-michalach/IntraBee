'use strict';

const { Model } = require('sequelize');

const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    
    static associate(models) {
      this.belongsToMany(models.Evento, { through: "usuario_eventos" });
      // this.hasMany(models.Apontamentos, { through: "usuario_apontamentos" });
      this.belongsToMany(models.Grupos, { through: "usuario_grupos" });
      this.belongsToMany(models.Mensagens, { through: "usuario_mensagens" });
      this.hasMany(models.Chats, { foreignKey: "id_usuario1" });
      // this.hasMany(models.Chats, { foreignKey: "id_usuario2" });

      // this.hasMany(models.Evento, { through: "usuario_eventos" });
      // this.hasMany(models.Apontamentos, { through: "usuario_apontamentos" });
      // this.hasMany(models.Grupos, { through: "usuario_grupos" });
      // this.hasMany(models.Mensagens, { through: "usuario_mensagens" });
      // this.hasMany(models.Chats, { foreignKey: "id_usuario1" });
      // this.hasMany(models.Chats, { foreignKey: "id_usuario2" });
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
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      set(senha) {
        this.setDataValue("senha", bcrypt.hashSync(senha, 10));
      }
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
    }
  }, { 
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};