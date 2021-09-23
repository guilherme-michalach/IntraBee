'use strict';

const {
  Model
} = require('sequelize');

const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    
    static associate(models) {
      // this.belongsToMany(models.Evento, { through: "usuario_eventos" });
      // this.belongsToMany(models.Apontamentos, { through: "usuario_apontamentos" });
      // this.belongsToMany(models.Grupos, { through: "usuario_grupos" });
      // this.belongsToMany(models.Mensagens, { through: "usuario_mensagens" });
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
    nome:{
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
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